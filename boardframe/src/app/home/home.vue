<template>
    <v-row>
      <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
      >
        <v-card>

          <v-list two-line>
            <template v-for="n in 6">
              <!-- 테이블 데이터 -->
              <v-list-item

                  :key="n"
              >

                <v-list-item-content>
                  <v-list-item-title>Message {{ n }}</v-list-item-title>

                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider
                  v-if="n !== 6"
                  :key="`divider-${n}`"
                  inset
              ></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>


export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    cards: ['Today', 'Yesterday'],

  }),
}
</script>
<style>
</style>
