<template>
  <v-dialog :value='isOpen' @click:outside='toggleIsOpen' max-width='768px'>
    <v-card class='pa-4'>
      <v-card-title class='text-h6 font-weight-bold pb-8'>
     등록 하기
      </v-card-title>
      <v-card-text class='pb-2' @keyup.enter="handleSaveClick" >
        <v-form ref='form' lazy-validation>
          <v-text-field
              v-model='inputValues.name'
              label='이름'
              hint="이름은 수정이 불가능합니다*"
              placeholder='이름을 입력하세요.'
              :rules='requiredRules'
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
        </v-form>
        <div class='d-flex mt-0' style='justify-content: end; gap: 12px;'>
          <v-btn @click='toggleIsOpen' outlined>
            <v-icon left>
              mdi-close-circle-outline
            </v-icon>
            닫기
          </v-btn>
          <v-btn @click='handleSaveClick'outlined>
            <v-icon left >
              mdi-content-save-outline
            </v-icon >
            저장
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
 <script >
import home from '@/app/home/Home.vue'

export default {
  comments:{
    home
  },
  data: () => ({
  inputValues: {
    title: '',
    name: '',
    subtitle: '',
    content: '',
  },
    requiredRules: [
      v => !!v || '필수 입력사항입니다.',
    ],
    isOpen: false,

  }),
  watch : {
    isOpen(curr) {
      this.$refs.form?.resetValidation()
      if (!curr) {
        this.activeId = null
        this.inputValues = {
          title: '',
          name: '',
          subtitle: '',
          content: '',
        }
      }
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
      }
    },
}
  </script>