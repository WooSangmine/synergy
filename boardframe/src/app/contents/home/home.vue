<template>
  <div>
    <v-data-table
        :headers='headers'
        :items='items'
        :serverItemsLength='totalItems'
        :options.sync='options'
        :loading='isLoading'
        loadingText='데이터를 불러오고 있습니다...'
        noDataText='데이터가 없습니다.'

        :footerProps='{
                showFirstLastPage: true,
                pageText: `${options.page}/${totalPages} 페이지`,
                itemsPerPageText: `페이지당 행 개수`,
                itemsPerPageOptions: [5, 10, 20],
            }'

    >
      <template v-slot:top>
        <div class='text-h6 font-weight-bold pl-8 pt-6'>
          목록 ({{ totalItems }})
          <v-btn icon @click='toggleIsOpen' style="margin-left: 30px">
            <v-icon>
              mdi-plus-circle
            </v-icon>
            <v-list-item-title>
              글 작성
            </v-list-item-title>
          </v-btn>
        </div>
      </template>
      <template v-slot:item.created="value">
        {{$moment(value).format('YYYY/MM/DD')}}
      </template>
      <template v-slot:item.updated="update"></template>
      <template v-slot:item.actions='{ item }'>
        <v-btn @click='handleEditClick(item)' icon class='mr-1'>
          <v-icon color='blue'>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn @click='handleRemoveClick(item)' icon>
          <v-icon color='red'>
            mdi-delete-sweep
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
      <!-- 생성 및 수정 모달   -->
    <v-dialog :value='isOpen' @click:outside='toggleIsOpen' max-width='768px'>
      <v-card class='pa-4'>
        <v-card-title class='text-h6 font-weight-bold pb-8'>
          {{ !activeId ? '등록' : '수정' }}하기
        </v-card-title>
        <v-card-text class='pb-2' @keyup.enter="handleSaveClick" >
          <v-form ref='form' lazy-validation>
            <v-text-field
                v-model='inputValues.name'
                label='이름'
                hint="이름은 수정이 불가능합니다*"
                placeholder='이름을 입력하세요.'
                :rules='requiredRules.concat(nameRules)'
                required
                clearable
                outlined
            />
            <v-text-field
                v-model='inputValues.title'
                label='제목'
                placeholder='제목을 입력하세요.'
                :rules='requiredRules'
                required
                clearable
                outlined
            />
            <v-text-field
                v-model='inputValues.subtitle'
                label='설명'
                placeholder='설명을 입력하세요.'
                :rules='requiredRules'
                required
                clearable
                outlined
            />
            <v-textarea
                v-model='inputValues.content'
                label='내용'
                placeholder='내용을 입력하세요.'
                :rules='requiredRules'
                clearable
                outlined
            />
            <v-text-field
                v-model="$moment(inputValues.created).format('YYYY/MM/DD')"
                label='생성일'
                readonly
                outlined
            />
            <v-text-field
                value="null"
                v-model="$moment(inputValues.updated).format('YYYY/MM/DD')"
                label='수정일'
                readonly
                solo
                outlined
            />

          </v-form>
          <div class='d-flex mt-0' style='justify-content: end; gap: 12px;'>
            <v-btn @click='toggleIsOpen' outlined>
              <v-icon left>
                mdi-close-circle-outline
              </v-icon>
              닫기
            </v-btn>
            <v-btn @click='handleSaveClick' outlined>
              <v-icon left >
                mdi-content-save-outline
              </v-icon >
              저장
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
<!--    <v-container>-->
<!--      <v-row-->
<!--          v-for='power in powers'-->
<!--          :key='power.id'-->
<!--      >-->
<!--        <v-col>title : {{ power.title }}</v-col>-->
<!--        <v-col>value : {{ power.value }}</v-col>-->
<!--      </v-row>-->
<!--    </v-container>-->
  </div>
</template>
<script>
import Resource from '@/api/server.js'
import Authorization from '@/app/com.u2ware.oauth2.jwt.authorizationserver'
export default {
  data: () => ({

    headers: [
      { text: '아이디', value: 'id', align: 'center',},
      { text: '이름', value: 'name', align: 'center',},
      { text: '제목', value: 'title', align: 'center',},
      { text: '설명', value: 'subtitle', align: 'center',},
      { text: '생성일',value:'created', align: 'date'},
      { text: '수정 / 삭제', value: 'actions', align: 'center', sortable: false },
    ],
    items: [],
    totalItems: 0,
    totalPages: 0,
    isLoading: true,


    isOpen: false,
    activeId: null,
    inputValues: {
      title: '',
      name: '',
      subtitle: '',
      content: '',
      created: '',
      updated:'',
      },
    requiredRules: [
      v => !!v || '필수 입력사항입니다.',
    ],
    nameRules : [
        v =>  /^\D+$/.test(v) || '글자만 입력할 수 있습니다.'
    ],
    options: {},
  }),
  watch: {
    isOpen(curr) {
      this.$refs.form?.resetValidation()
      if (!curr) {
        this.activeId = null
        this.inputValues = {
          title: '',
          name: '',
          subtitle: '',
          content: '',
          created: '',
          updated:'',
        }
      }
    },
    options: {
      handler() {
        this.searchApi(this.options)
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen
    },

    // Event Handlers
    handleEditClick(item) {
      this.readApi(item.id)
    },
    handleSaveClick() {
      const isValidate = this.$refs.form.validate()

      if (!isValidate) return

      if (!this.activeId) {
        // 등록
        const isConfirm = confirm('이대로 등록하시겠습니까?')
        if (!isConfirm) return

        this.createApi()
      } else {
        // 수정
        const isConfirm = confirm('이대로 수정하시겠습니까?')
        if (!isConfirm) return

        this.updateApi(this.activeId)
      }
    },
    handleRemoveClick(item) {

      const isConfirm = confirm('[ ' + item.title + ' ] (을)를 정말로 삭제하시겠습니까?')
      if (!isConfirm) return

      this.deleteApi(item.id)
    },

    // APIs
    searchApi(options) {
      this.isLoading = true
      if (options) this.options = options
      const { page, itemsPerPage, sortBy, sortDesc } = this.options
      Resource.memberBoards
          .search({
            params: {
              size: itemsPerPage,
              page: page - 1 || undefined,
              sort: sortBy?.length ? `${sortBy[0]},${sortDesc[0] ? 'DESC' : 'ASC'}` : undefined,
            },
          })
          .then((res) => {
            this.items = res.data._embedded.memberBoards
            this.totalItems = res.data.page.totalElements
            this.totalPages = res.data.page.totalPages
          })
          .catch((err) => {
            console.error(err)
          })
      this.isLoading = false
    },
    // 생성
    createApi() {
      Resource.memberBoards
          .create({data: this.inputValues })
          .then(() => {
            this.searchApi()
            alert('등록이 완료되었습니다!')
          })
          .catch((err) => {
            console.error(err)
            alert('에러가 발생하였습니다!')
          })

      this.toggleIsOpen()
    },
    // 단일 조희
    readApi(id) {
      Resource.memberBoards
          .read({ id })
          .then((res) => {
            const item = res.data
            this.activeId = item.id
            this.inputValues.name = item.name
            this.inputValues.title = this.getTitle(item.title)
            this.inputValues.subtitle = item.subtitle
            this.inputValues.content = item.content
            this.inputValues.created = item.created
            this.inputValues.updated = item.updated

            this.toggleIsOpen()
          })
          .catch((err) => {
            console.error(err)
            alert('에러가 발생하였습니다!')
          })
    },
    // 추가
    updateApi(id) {
      Resource.memberBoards
          .update({ id, data: this.inputValues })
          .then(() => {
            this.searchApi()
            alert('수정이 완료되었습니다!')
          })
          .catch((err) => {
            console.error(err)
            alert('에러가 발생하였습니다!')
          })

      this.toggleIsOpen()
    },
    // 삭제
    deleteApi(id) {
      Resource.memberBoards
          .delete({ id })
          .then(() => {
            this.searchApi()
            alert('삭제가 완료되었습니다!')
          })
          .catch((err) => {
            console.error(err)
            alert('에러가 발생하였습니다!')
          })
    },
    getTitle(title){
      return title.replace(/\[.*?\]/g,'')
}
  },
}
</script>
<style>
</style>