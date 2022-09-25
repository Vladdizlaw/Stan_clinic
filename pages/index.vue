<script setup>
import { ref, reactive, onMounted } from 'vue'
const opensFlag = reactive({
  1: false,
  2: false,
  3: false,
  4: false,
})
let visible = ref(false)
let isMounted = ref(false)
let hints = ref('data_1')
onMounted(() => { isMounted.value = true })
function changeVisibility(hint) {
  // Object.keys(opensFlag).forEach(key => opensFlag[key] = false)
  visible.value = true
  hints.value = hint
}
</script>

<template>
  <div class="page1 w-screen">
    <header class="header" id="header">
      <div class="header-logo">
        <img src="../assets/stan_header.svg" alt="" />
      </div>
      <div class="header-center ">
        <a href="#page2" class="header-center__button duration-200 hover:drop-shadow-md">
          Услуги
        </a>
        <a href="#page3" class="header-center__button duration-200 hover:drop-shadow-md">
          О нас
        </a>
        <a href="#page4" class="header-center__button duration-200 hover:drop-shadow-md">
          Преимущество
        </a>
      </div>
      <div class="header-phone">
        <img class="header-phone__phone" src="../assets/phone.svg" alt="" />
        <button @click="changeVisibility('data_1')" class="header-phone__button duration-200 hover:drop-shadow-md">
          Запись на прием
        </button>
      </div>
    </header>
    <main data="data_1" class="main-first w-full flex flex-col h-[110vh]  ">
      <teleport :to="`[data=${hints}]`" :disabled="!visible" v-if="isMounted">
        <ModalForm v-if="visible" v-model:visible="visible" />
      </teleport>
      <div class="main-first__title ">
        <h1>Профессиональное <br /> лечение с гарантией <br /> от срыва</h1>
      </div>
      <p class="mt-5 mb-5">АНОНИМНО КРУГЛОСУТОЧНО ДОСТУПНО</p>
      <div class="main-first-subtitle flex flex-col  ">
        <p class="leading-3 ">при записи на консультацию с сайта</p>
        <span class="leading-3 mt-5 ">скидка 10% на первый месяц реабилитации</span>
      </div>
      <button @click="changeVisibility('data_1')"
        class="main-first-subtitle__button mt-5 duration-200 hover:drop-shadow-md">
        Записаться
      </button>
    </main>
    <main id="page2" data="data_2" class="main-second  min-h-[110vh] relative">
      <div class="absolute top-0  left-0"></div>
      <div class="main-second-text">
        <p class="main-second-text__title">Услуги <br />наркологического центра</p>
        <div class="main-second-text__center flex flex-col mt-[5rem]  gap-[3rem]">

          <p>Реабилитация:</p>
          <div class="main-second-text__div flex-col flex mt-[-2rem]  ml-[-3rem] gap-5">
            <p>лечение наркомании</p>
            <p>лечение алкоголизма</p>
            <p>лечение игровой зависимости</p>
            <p>лечение анарексии</p>
            <p>корекция девиантного поведения</p>
          </div>
          <p c>Детокс</p>
          <p>Вывод из запоя</p>
          <p>Кодирование от алкоголизма</p>
        </div>
      </div>

      <div class="main-second-button">
        <button @click="changeVisibility('data_2')"
          class="main-first-subtitle__button consult hover:drop-shadow-md duration-200">
          Бесплатная консультация специалиста
        </button>
      </div>
    </main>
    <main id="page3" class="flex flex-col min-h-[110vh] w-full bg-[#EBF8FF]  relative">
    
      <div class="flex flex-col gap-2 pl-[15%] pt-[5%]">
        <div>
          <h1 class="text-[3rem] text-[#009748] pb-[3rem]">О нас</h1>
        </div>
        <div class=" flex flex-col">
          <div class=" flex gap-2">
            <h1 class="text-[3rem] text-[#206891]">Реабилитация</h1>
            <p @click="opensFlag[1]=!opensFlag[1]"
              class="text-[1.5rem] mt-7 text-[#206891] hover:underline  hover:drop-shadow-md duration-200 cursor-pointer">
              <span v-if="!opensFlag[1]">подробно</span><span v-if="opensFlag[1]" class="text-[#009748]">свернуть</span>
            </p>
          </div>
          <div v-if="opensFlag[1]" class="w-1/2 pb-[2rem] ml-[15%] text-[1.2rem]"> Зависимость от психоактивных веществ
            негативно сказывается на организме человека, а также его психическом состоянии. Человек, который страдает от
            такой болезни, даже когда осознает всю ее опасность, не может самостоятельно справиться с проблемой. Для
            успешного лечения необходимо обратиться за помощью к профессионалам. Помимо использования медикаментозной
            терапии, особое внимание заслуживает реабилитация наркозависимых в Краснодаре. Больной должен научиться жить
            в обществе и справляться с возможными проблемами без использования наркотиков.

            Для чего нужна реабилитация ?

            Наркомания – заболевание не только физическое, но и психическое. Основная сложность заключается в том, что
            привыкание к наркотикам развивается с очень быстрой скоростью. И, даже если справиться с физической тягой к
            психоактивным веществам можно с использованием медикаментов и кодирования, то с психологической избавиться
            от тяги
            к постоянному чувству эйфории значительно сложнее. Специалисты реабилитационного центра СТАН убеждены, что
            реабилитация наркозависимых в Краснодаре – важнейший этап в лечении наркотической зависимости. Именно она
            позволяет научиться контролировать свое поведение и адаптироваться к новой жизни.

            Какие методы используются для реабилитации ?

            Основная цель реабилитации – восстановление психологического состояния пациента после пройденной комплексной
            терапии. Он должен осознать, какое влияние оказывают наркотики на его организм и осознанно захотеть изменить
            свое положение. В реабилитационном центре СТАН используются различные методики для полного излечения
            зависимого. Это длительная борьба, в которой участвует не только сам пациент, но также различные специалисты
            (психологи, психотерапевты и др.). Особо важное значение также имеет поддержка близких и родных.
            В качестве реабилитации используются различные способы. Например, индивидуальные и групповые
            психотерапевтические сеансы, посещение групп анонимных наркоманов, посещение различных кружков и
            мероприятий, занятие спортом и др. Все эти варианты позволяют пациенту по-новому посмотреть на свою жизнь и
            понять, что без наркотиков она также может быть яркой и насыщенной. Реабилитация наркозависимых в Краснодаре
            может происходить в форме дневного или круглосуточно стационара. Специалисты реабилитационного центра СТАН
            убеждены, что именно второй вариант является более эффективным. В этом случае у зависимого нет никаких
            соблазнов сорваться и вновь начать употреблять наркотики.

            Насколько эффективна реабилитация?

            Реабилитация зависимых не зря считается одним из самых важных
            этапов на пути к выздоровлению. Благодаря правильно подобранной реабилитационной программе, пациент:
            1 Решает психологические проблемы, которые стали причиной употребления психоактивных веществ;
            2 Находит новые увлечения, чтобы понять, что в жизни могут быть другие интересы кроме наркотиков;
            3 Учится заново социализироваться и общаться с людьми как раньше.

            Наркологи реабилитационного центра СТАН особое внимание уделяют качеству реабилитации. Используя
            индивидуальный подход, они подбирают план для каждого конкретного случая. Благодаря высокой квалификации
            и большому количеству наработок, специалисты помогают максимально эффективно пройти реабилитацию
            наркозависимых в Краснодаре и вернуться в социум без тяги к употреблению психоактивных веществ.

            Составление индивидуального плана реабилитации
            Тематические лекции (1 лекция/день)
            Проведение вечерних терапевтических групп под руководством консультанта: Самоанализ
            Психотерапевтическая поддержка семьи
            Психиатрия и психологическая коррекция
            Обеспечение психологической и социальной поддержки
            Четырехразовое питание
            Спортивные мероприятия
            Арттерапия
            Кинотерапия</div>
        </div>
        <div class=" flex flex-col">
          <div class=" flex gap-2">
            <h1 class="text-[3rem] text-[#206891]">Детокс</h1>
            <p @click="opensFlag[2]=!opensFlag[2]"
              class="text-[1.5rem] mt-7 text-[#206891] hover:underline  hover:drop-shadow-md duration-200 cursor-pointer">
              <span v-if="!opensFlag[2]">подробно</span><span v-if="opensFlag[2]" class="text-[#009748]">свернуть</span>
            </p>
          </div>
          <div v-if="opensFlag[2]" class="w-1/2 pb-[2rem] ml-[15%] text-[1.2rem]"> Детоксикация – процесс очищения
            организма от токсинов методами их обезвреживания и последующего выведения. Естественная детоксикация
            организма происходит в печени путем мочевыделения, образования пота
            и т. д. Когда клетки тканей не справляются с этой задачей самостоятельно, используют методы искусственного
            избавления от вредных веществ.

            Проведение детоксикации
            При любых проявлениях интоксикации следует обратиться к специалисту! В зависимости от характеристик
            вещества, которое привело к отравлению, доктор назначит необходимое лечение. Программа детоксикации
            организма предусматривает поэтапное проведение процедур. Сначала выявляют и обезвреживают токсины, затем
            проводят очищение организма различными методами, в том числе с помощью капельницы.

            Медикаментозные (постановка капельницы):
            химические противоядия;
            биохимические противоядия;
            симптоматическое лечение;
            антитоксическая иммунотерапия;

            В нашей реабилитационном центре процедуры детоксикации проводят опытные специалисты. Узнать точную цену
            процедуры и записаться
            на прием можно по контактному телефону.</div>
        </div>
        <div class=" flex flex-col">
          <div class=" flex gap-2">
            <h1 class="text-[3rem] text-[#206891]">Вывод из запоя</h1>
            <p @click="opensFlag[3]=!opensFlag[3]"
              class="text-[1.5rem] mt-7 text-[#206891] hover:underline  hover:drop-shadow-md duration-200 cursor-pointer">
              <span v-if="!opensFlag[3]">подробно</span><span v-if="opensFlag[3]" class="text-[#009748]">свернуть</span>
            </p>
          </div>
          <div v-if="opensFlag[3]" class="w-1/2 pb-[2rem] ml-[15%] text-[1.2rem]"> Заказать вывод из запоя с выездом на
            дом можно в реабилитационном центре СТАН. Для этого достаточно позвонить и оставить заявку. Делать это можно
            круглосуточно. Врач нарколог прибудет по указанному адресу. Он приедет в самые сжатые сроки. Специалист
            окажет первую помощь, позволяющую значительно облегчить общее состояние. Он поставит пациенту капельницу,
            которая выведет из организма токсические вещества. Эта процедура устранит алкогольное опьянение. Человек
            может объективно воспринимать получаемую информацию. Дальше доктор проведет с зависимым беседу, в ходе
            которой будет мотивировать его пройти полноценное лечение. Благодаря опыту наших врачей, успеха удается
            добиться в 90% всех случаев.

            Противопоказания к выводу из запоя на дому
            Выведение из запоя на дому имеет и ряд противопоказаний.
            К ним относят:
            беременность;
            неврологические расстройства;
            тяжелые сердечно-сосудистые заболевания;
            период после инсульта или инфаркта;
            сложные болезни печени;
            аллергию на применяемые препараты;
            стопроцентный отказ человека от процедур.

            В ряде ситуаций вывод из запоя в Краснодаре можно провести
            в стационарных условиях под наблюдением врачей. Здесь будет организована более масштабная детоксикация для
            полной стабилизации состояния. Все препараты, которые используют врачи реабилитационного центра,
            характеризуются полной безопасностью и высокой эффективностью. Мы понимаем, что алкоголизм – это большая
            проблема. Поэтому доставляем пациентов в стационарное отделение в любое время. Здесь проводится вывод из
            запоя круглосуточно.</div>
        </div>
        <div class=" flex flex-col">
          <div class=" flex gap-2">
            <h1 class="text-[3rem] text-[#206891]">Кодирование от алкоголизма</h1>
            <p @click="opensFlag[4]=!opensFlag[4]"
              class="text-[1.5rem] mt-7 text-[#206891] hover:underline  hover:drop-shadow-md duration-200 cursor-pointer">
              <span v-if="!opensFlag[4]">подробно</span><span v-if="opensFlag[4]" class="text-[#009748]">свернуть</span>
            </p>
          </div>
          <div v-if="opensFlag[4]" class="w-1/2 pb-[2rem] ml-[15%] text-[1.2rem]"> Кодирование уколом от алкогольной
            зависимости – это процедура, во время которой пациенту вводят
            специальный препарат, вызывающий развитие сильнейшей интоксикации организма при приеме любых доз алкоголя.

            Внутримышечная кодировка имеет много плюсов, но чтобы эффективность процедуры была максимальной, врачи
            рекомендуют сочетать кодировку с психотерапевтической помощью.

            Медикаментозное кодирование (укол под лопатку и внутривенно)
            Сроки: пол года, год, 3 года
            Сумма:
            Пол года (4500)
            Год (7900)
            Три года (12000)

            Перед проведением кодировки пациенту подробно объясняют, как будет проводиться процедура, как препарат будет
            действовать и что случиться, если пациент после терапии данным способом снова начнет пить алкоголь. После
            этого препарат вводится в организм внутримышечно.

            Принцип действия внутримышечного кодирования прост. Если человек после инъекции в вену или мышцу ведет
            трезвый образ жизни, ему ничего не грозит. Но стоит принять даже небольшую дозу алкоголя, как тут же
            начинается сильная интоксикация организма и возникают крайне неприятные последствия:
            тошнота;
            рвота;
            судороги;
            артериальная гипертензия;
            тахикардия;
            сильные головные боли и другие симптомы абстиненции.

            В результате пациент боится принять очередную дозу алкоголя, даже если очень хочется. Постепенно у него
            развивается отвращение к спиртному, человек понемногу начинает привыкать к трезвой жизни.

            Велика вероятность, что даже после окончания срока действия укола он не начнет снова выпивать. Если тяга к
            алкоголю все же сохраняется, то рекомендуется провести повторное кодирование. Для получения устойчивого
            результата необходимо пройти полный курс лечения, который включает в себя не только вывод из запоя и
            кодирование, но и лечение сопутствующих заболеваний, психотерапию, ресоциализацию.</div>
        </div>
      </div>
      <div data="data_3" class="relative "></div>
      <button  @click="changeVisibility('data_3')"
        class="main-first-subtitle__button  consult mt-[5rem] mb-[2rem] w-[33%] ml-[33%] bottom-[2rem] hover:drop-shadow-xl duration-200">
        Заказать звонок специалиста
      </button>
    
    </main>
    <main id="page4" class="flex flex-col h-[110vh] w-full  items-center">
      <div class=" flex flex-col items-start justify-center  pl-[10%]  pt-[5%] ">
        <h1 class="text-[2.5rem] text-[#009748] mb-5">Преимущества нашего центра</h1>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5" src="../assets/plus.svg" />100%
          Анонимность</div>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5"
            src="../assets/plus.svg" />Квалифицированные специалисты с многолетним опытом</div>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5"
            src="../assets/plus.svg" />Индивидуальный подход</div>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5"
            src="../assets/plus.svg" />Комфортные стационарные условия для прохождения
          курса реабилитации</div>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5" src="../assets/plus.svg" />4-х
          разовое сбалансированное питание</div>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5"
            src="../assets/plus.svg" />Занятие спортом на открытом воздухе</div>
      </div>
      <div class="flex  justify-center items-center justify-self-center  mt-10">
        <image-slider class=""></image-slider>
      </div>

    </main>
    <main style="background-image: url('../assets/main.png')"
      class="flex flex-col bg-cover h-[100vh] w-full  items-start  justify-center  px-[5rem]  ">
      <div class="flex ml-[7rem] ">
        <h1 class="text-[2rem] font-bold text-[#009748] mb-[5rem]">Отзывы</h1>
      </div>
      <div class="flex ">
        <div class="flex flex-col p-5 px-[3rem] gap-10">
          <div class="text-[1.5rem] text-[#009748]">Андрей 31 год</div>
          <div class="text-[1rem] flex w-5/6">Всем привет. Меня зовут Андрей, мне 31 год. Употреблял более 10 лет. Перед
            тем как попасть в РЦ «СТАН» моя жизнь полностью была разрушена. Прошел необходимый курс реабилитации, соц.
            адаптацию и волонтерства. За время нахождения
            в центре я полностью изменил свое отношение к самому себе и к своему заболеванию. До меня донесли, что
            употребление наркотиков – это не просто моя дурная привычка, это заболевание, которое необходимо лечить и
            доверить этот процесс профессионалам. Мне помогли, поддержали, многому научили, дали те знания которые
            помогают мне по сей день оставаться трезвым и добиваться успехов в жизни. Действительно центр дал мне новую
            жизнь, я благодарен этому месту, людям которые помогали. Желаю вам процветания и всего наилучшего.</div>
        </div>

        <div class="flex flex-col p-5 gap-10">
          <div class="text-[1.5rem] text-[#009748]">Дима 23 года</div>
          <div class="text-[1rem] flex w-5/6">Меня зовут Дмитрий мне 23 года
            4 года я не мог отказаться от выпивки и наркотиков воровал дрался было много приводов в полиции и в один
            прекрасный момент родные нашли этих ребят
            меня забрали довезли до дома
            и каждый день со мной работали психологи и эти ребята и всего через 3 с половиной месяца я начал видеть в
            себе изменения
            я понял что больше не хочу поступать так как поступал раньше я понял что не хочу обманывать окружающих
            родных друзей
            я понял что хочу жить
            и вот после полного курса реабилитации я чист уже почти
            2 года и у меня полностью пропало одержимое желание употреблять наркотики и алкоголь
            я нашел себе хорошую работу
            восстановил семейную сферу
            и в этом мне помогли эти ребята.</div>
        </div>

        <div class="flex flex-col p-5 gap-10">
          <div class="text-[1.5rem] text-[#009748]">Елена 34 года</div>
          <div class="text-[1rem] flex w-5/6">
            <p class="font_agopt"> За моей спиной 12 лет наркотичесской зависимости, из них, как минимум
              половина, неудачных попыток справится самой. Самое страшное, что в какой-то момент. я уже смирилась с тем,
              что слезть с иглы не возможно, и мучительно «доживала» свою жизнь, в надежде на то, что осталось совсем
              немного. Спасибо моей мамуле, что она не сдалась. По рекомендации своей близкой подруги, она отправила
              меня
              в РЦ «СТАН», на данный момент у меня уже 3 года чистоты, и я по настоящему счастлива, я ни когда не
              думала,
              что жизнь может быть на столько прекрасной без наркотиков. Сейчас я с ужасом вспоминаю своё прошлое, и
              искренне желаю каждому зависимому, обрести ту свободу, которую обрела я.</p>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>

    </main>
    <header class="header">
      <div class="header-logo ">
        <img src="../assets/stan_header.svg" alt="" />
      </div>
      <div class="header-center w-ful">
        <div class="flex justify-center items-center h-full duration-200 hover:drop-shadow-md gap-8">
          <a href="#page2" class="text-[1.7rem]  cursor-pointer text-[#73C9F7]">Услуги </a>
        </div>
        <div class="flex justify-center items-center h-full duration-200 hover:drop-shadow-md">
          <a href="#page3" class="text-[1.7rem] cursor-pointer text-[#73C9F7]">О нас </a>
        </div>
        <div class="flex justify-center items-center h-full duration-200 hover:drop-shadow-md">
          <a href="#page4" class="text-[1.7rem] cursor-pointer text-[#73C9F7]">Преимущество </a>
        </div>
      </div>
      <div class="header-phone">
        <img class="header-phone__phone" src="../assets/phone.svg" alt="" />
      <p class="text-[#73C9F7] text-4xl underline decoration-solid"   >stan-clinic@ya.ru</p>
      </div>
    </header>
  </div>
</template>
<style scoped >
.page1 {
  font-family: AGOptCyrillic Normal;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.header {
  width: 100%;
  height: 16vh;
  display: flex;
  padding-top: 2rem;

}

.header-logo {
  width: max(33%,15rem);
  padding-left: 3rem;
}

.header-center {
  width: 33%;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
 
  justify-content: center;
}


.header-center__button {
  background: linear-gradient(179.99deg, #70D7FD 23.43%, #94C5E9 98.73%);
  color: white;
  border-radius: 1rem 1rem 0 0;
  border: none;
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display:flex;
  
}

.header-phone {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: max(33%,15rem);
  height: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  padding-right: 5rem;
}

.header-phone__phone {
  width: 20rem;
}

.header-phone__button {
  width: 20rem;
  padding: 0.5rem;
  background: linear-gradient(179.99deg, #70D7FD 23.43%, #94C5E9 98.73%);
  color: white;
  border-radius: 2rem;
  border: none;
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1rem;
  text-align: center;
  cursor: pointer;
}

.main-first {
  width: 100vw;
  height: 84vh;
  background: url('../assets/main.png');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;

}

.main-first__title {
  width: 45%;
}

.main-first__title>h1 {
  color: #206891;
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 700;
  font-size:max(3vw,2rem);
  line-height: 4rem;
  text-align: center;
  margin-top: -5rem;
}

.main-first>p {

  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 700;
  font-size: max(2vw,1.5rem);

  /* margin-bottom: -1rem; */
  text-align: center;
  color: #009748;
}

.main-first-subtitle {
  /* width: 45; */
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
}

.main-first-subtitle>p {
  font-family: AGOptCyrillic Normal;
  font-style: italic;
  font-weight: 400;
  font-size: max(1.5vw,1rem);
  /* line-height: 0.5rem; */
  text-align: center;
  color: #000000;
}

.main-first-subtitle>span {
  font-family: AGOptCyrillic Normal;
  font-style: italic;
  font-weight: 700;
  font-size: max(1.5vw,1rem);
  /* line-height: 0.5rem; */
  text-align: center;
  color: #000000;
}

.main-first-subtitle__button {
  background: linear-gradient(179.99deg, #70D7FD 23.43%, #94C5E9 98.73%);
  color: white;
  border-radius: 2rem;
  border: none;
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 1rem;
  text-align: center;
  /* width:20rem; */
  padding: 1.5rem 7rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.main-second {
  width: 100%;
  height: 100vh;
  background: url('../assets/main2.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding-top:8rem; */

  gap: 10rem;
}

.main-second-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15%;
  /* transform: translateX(25%); */
  transform: translateY(25%);
  display: flex;
  justify-content: flex-start;
}

.main-second-text__title {
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3rem;
  color: #009748;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

}

.main-second-text__center {
  padding-top: 1rem;
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1rem;
  color: #206891;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}

.main-second-text__center>p {
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  /* line-height: 1rem; */
  text-align: center;
  color: #206891;
  /* margin-top:-0.2rem; */


}

.main-second-text__center {
  display: flex;
  max-height: 70%;
  /* gap:-2rem; */
}

.main-second-text__div {
  padding-left: 20rem;
  line-height: 0.5rem;
  /* margin-top:-3.5rem; */
}

.main-second-button {
  display: flex;
  /* max-width:40%; */
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
}

.consult {
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
}

.font_agopt {
  font-family: AGOptCyrillic Normal;
}
</style>