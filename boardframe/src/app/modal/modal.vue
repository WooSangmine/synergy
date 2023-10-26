
<template v-slot:top>
  <v-toolbar
      flat
  >
    <v-divider
        class="mx-4"
        inset
        vertical
    ></v-divider>
    <v-spacer></v-spacer>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
            color="primary"
            v-bind="props"
            @click="dialog = true"
        >
          게시 글쓰기
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">게시글 쓰기</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    v-model="editedItem.name"
                    label="이름"
                    required
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="8"
              >
                <v-text-field
                    v-model="editedItem.title"
                    label="제목"
                    required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    v-model="editedItem.subtitle"
                    label="설명"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="editedItem.content"
                    label="내용"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color="blue-darken-1"
              variant="text"
              @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-toolbar>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const desserts = ref([])
const editedIndex = ref(-1)
const editedItem = ref({
  name: '',
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
})

function save () {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value)
  } else {
    desserts.value.push(editedItem.value)
  }
  close()
}
</script>

<script>

export default {
  data: () => ({
    dialog: false,
  }),

}
</script>