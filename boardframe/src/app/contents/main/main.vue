
<template>
  <v-app>
    <section id='hero'>
      <v-row no-gutters>
        <v-img
            :min-height='`calc(100vh - ` + $vuetify.application.top + `px)`'
            src='@/assets/mainBackground.png'
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                  align='center'
                  class='white--text mx-auto'
                  justify='center'
              >
                <v-col class='white--text text-center' cols='12' tag='h1'>
										<span
                        :class='[
												$vuetify.breakpoint.smAndDown
													? `display-1`
													: `display-2`,
											]'
                        class='font-weight-light'
                    >
											xEMS Platform
										</span>
                  <br />
                  <span
                      :class='[
												$vuetify.breakpoint.smAndDown
													? `display-3`
													: `display-4`,
											]'
                      class='font-weight-black'
                  >
											Synergy - xEMS
										</span>
                </v-col>

                <v-btn
                    class='align-self-end mt-8'
                    fab
                    outlined
                    @click='$vuetify.goTo(`#about-me`)'
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id='about-me'>
      <div class='py-12' />
      <v-container class='text-center'>
        <h2 class='display-2 font-weight-bold mb-3'>
          Synergy - xEMS
        </h2>

        <v-responsive class='mx-auto my-8' width='56'>
          <v-divider class='mb-1' />
          <v-divider />
        </v-responsive>

        <v-responsive
            class='mx-auto title font-weight-light mb-8'
            max-width='720'
        >
          'Synergy - xEMS' 는 필요한 데이터를 효과적으로 관리할 수 있습니다.
          'Synergy - xEMS' 는 필요한 데이터를 효과적으로 관리할 수 있습니다.
          'Synergy - xEMS' 는 필요한 데이터를 효과적으로 관리할 수 있습니다.
          'Synergy - xEMS' 는 필요한 데이터를 효과적으로 관리할 수 있습니다.
          'Synergy - xEMS' 는 필요한 데이터를 효과적으로 관리할 수 있습니다.
          'Synergy - xEMS' 는 필요한 데이터를 효과적으로 관리할 수 있습니다.
        </v-responsive>

      </v-container>
      <div class='py-12' />
    </section>

    <section id='features' class='grey lighten-3'>
      <div class='py-12' />
      <v-container class='text-center'>
        <h2 class='display-2 font-weight-bold mb-3'>
          FEATURES
        </h2>

        <v-responsive class='mx-auto my-8' width='56'>
          <v-divider class='mb-1' />
          <v-divider />
        </v-responsive>

        <v-row>
          <v-col
              v-for='({ icon, title, text }, i) in features'
              :key='i'
              cols='12'
              md='4'
          >
            <v-card class='py-12 px-4' color='grey lighten-5' flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar color='primary' size='88'>
                    <v-icon large v-text='icon' />
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                  class='justify-center font-weight-black text-uppercase'
                  v-text='title'
              />

              <v-card-text class='subtitle-1' v-text='text' />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class='py-12' />
    </section>

    <section id='stats'>
      <v-parallax
          :height='$vuetify.breakpoint.smAndDown ? 700 : 500'
          src='@/assets/statsBackground.jpeg'
      >
        <v-container fill-height>
          <v-row class='mx-auto'>
            <v-col
                v-for='[value, title] of stats'
                :key='title'
                cols='12'
                md='4'
            >
              <div class='text-center'>
                <div
                    class='display-3 font-weight-black mb-4'
                    v-text='value'
                ></div>
                <div
                    class='title font-weight-regular text-uppercase'
                    v-text='title'
                ></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section id='blog'>
      <div class='py-12' />
      <v-container>
        <h2 class='display-2 font-weight-bold mb-3 text-uppercase text-center'>
          Blog
        </h2>

        <v-responsive class='mx-auto my-8' width='56'>
          <v-divider class='mb-1' />
          <v-divider />
        </v-responsive>

        <v-row>
          <v-col
              v-for='({ src, text, title, href }, i) in articles'
              :key='i'
              cols='12'
              md='4'
          >
            <v-img
                :src='src'
                class='mb-4'
                height='275'
                max-width='100%'
            />

            <h3
                class='font-weight-black mb-4 text-uppercase'
                v-text='title'
            />

            <div class='title font-weight-light mb-5' v-text='text' />

            <v-btn class='ml-n4 font-weight-black' text :href='href'>
              Continue Reading
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <div class='py-12' />
    </section>
  <v-footer class='justify-center' color='#292929' height='56'>
    <div
        class='subtitle-1  font-weight-light grey--text text--lighten-1 text-center'
    >
      Copyright &copy; {{ new Date().getFullYear() }} Synergy Inc. all
      rights reserved.
    </div>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: 'mdi-share-variant',
          title: '이러한 특징',
          text: 'Synergy xEMS 는 이러한 특징이 있습니다.Synergy xEMS 는 이러한 특징이 있습니다.Synergy xEMS 는 이러한 특징이 있습니다.Synergy xEMS 는 이러한 특징이 있습니다.Synergy xEMS 는 이러한 특징이 있습니다.Synergy xEMS 는 이러한 특징이 있습니다.Synergy xEMS 는 이러한 특징이 있습니다.',
        },
        {
          icon: 'mdi-ev-station',
          title: '그러한 특징',
          text: 'Synergy xEMS 는 그러한 특징이 있습니다. Synergy xEMS 는 저러한 특징이 있습니다.Synergy xEMS 는 저러한 특징이 있습니다.Synergy xEMS 는 저러한 특징이 있습니다. Synergy xEMS 는 저러한 특징이 있습니다.Synergy xEMS 는 저러한 특징이 있습니다.Synergy xEMS 는 저러한 특징이 있습니다.',
        },
        {
          icon: 'mdi-account-group-outline',
          title: '그러한 특징',
          text: 'Synergy xEMS 는 그러한 특징이 있습니다. Synergy xEMS 는 그러한 특징이 있습니다.Synergy xEMS 는 그러한 특징이 있습니다.Synergy xEMS 는 그러한 특징이 있습니다. Synergy xEMS 는 그러한 특징이 있습니다.Synergy xEMS 는 그러한 특징이 있습니다.Synergy xEMS 는 그러한 특징이 있습니다.',
        },
      ],
      stats: [
        ['143,508', '가용 전력량(kW)'],
        ['1,097', '계측기'],
        ['216', '사용자'],
      ],
      articles: [
        {
          src: 'https://cdn.electimes.com/news/photo/202204/303525_502712_119.jpg',
          title: '시너지, 이노비즈 AA등급 획득…혁신기술 인정받았다',
          text: '에너지 IT 기업 시너지가 이노비즈 AA등급을 획득하여 기술력을 인정받았다. 이노비즈는 기술 우위를 기반으로 경쟁력을 확보한 중소기업을 뜻하며, 선정 기준은 미래 성장성을 강조한다. 시너지는 소프트웨어 기술력으로 AA등급을 획득하고, 에너지 효율화를 위해 인공지능과 빅데이터 기술을 활용한다. 또한, 태양광 발전소 관리 서비스를 준비 중으로 국내 태양광 보급에 기여할 계획이다. 이로써 시너지는 미래를 대비한 강력한 에너지 IT 솔루션 기업으로 성장하고 있다.',
          href: 'https://www.electimes.com/news/articleView.html?idxno=303525',
        },
        {
          src: 'http://cmsimg.newstomato.com/news/8/2022/03/2022-03-14/202203131318459418780.jpg',
          title: '영업 2년반만에 매출 96억 달성…2025년 IPO 목표',
          text: '에너지 플랫폼 기반 가상발전(VPP) 업체인 시너지가 놀라운 성과를 거두며 울산의 스타트업으로 떠올랐다. 2019년 창업 이후 2년반 만에 매출이 크게 성장하며 서울과 대구 등에서 수주 실적을 이루고 있다. 시너지는 인공지능과 빅데이터를 활용하여 에너지 효율을 최적화하고, 스마트그리드 분야로 확장하며 성장 중이다. 가상발전 분야로 진출하고 있으며, 특허 등록 수도 상당히 많다. 시너지는 미래에 코스닥 상장(IPO)을 목표로 하며 2025년까지 큰 성장을 이루고자 한다.',
          href: 'https://www.iusm.co.kr/news/articleView.html?idxno=940304',
        },
        {
          src: 'https://cdn.electimes.com/news/photo/202202/228610_145651.jpg',
          title: '장권영 시너지 대표 연료전지 발전소 통해 매년 2배 이상 성장…유니콘 기업 목표',
          text: '지난해 말 에너지 IT 플랫폼 기업 시너지(synergy, 대표 장권영)는 ‘재생에너지 전기공급사업자’ 등록과 ‘클라우드 서비스 확인서’ 발급을 완료하며 전기공급과 가상발전소(Virtual Power Plant ;VPP) 사업으로 영역을 넓혔다.여기에 두산, SK 등 대기업이 주를 이룬 연료전지 발전소 사업에 스타트업 중 최초로 성과를 거두며 성장세가 가속화될 것으로 기대되고 있다.장권영 대표는 시너지가 에너지 업계의 ‘유니콘 기업’(기업 가치가 1조원 이상이고 창업한 지 10년 이하인 비상장 스타트업)으로 거듭날 것으로 기대하고 있다.이에 시너지 강남베이스에서 장 대표를 만나 시너지의 과거와 현재, 그리고 미래를 물었다.',
          href: 'https://www.electimes.com/news/articleView.html?idxno=228610',
        },
      ],
    }
  },
}
</script>

<style>

</style>