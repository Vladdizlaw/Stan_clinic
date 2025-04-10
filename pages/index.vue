<script setup>

// import { ref, reactive, onMounted } from 'vue'
const opensFlag = reactive({
  1: false,
  2: false,
  3: false,
  4: false,
})
let visible = ref(false)
let isMounted = ref(false)
let hints = ref('data_1')

onMounted(() => {
  window.scrollTo({
    top: -100,

  });
  isMounted.value = true

})
function changeVisibility(hint) {
  // Object.keys(opensFlag).forEach(key => opensFlag[key] = false)
  visible.value = true
  hints.value = hint
}
</script>

<template>
  <div class="page1 " ref="mainscreen">

    <main id="page1" data="data_1" class="main-first w-full flex flex-col h-[100vh]  ">
      <header class="header " id="header">
        <div class="header-logo">
          <img src="../assets/stan_header.svg" alt="" />
        </div>
        <div class="header-center ">
          <a href="#page2" class=" btn header-center__button duration-200 hover:drop-shadow-md">
            Услуги
          </a>
          <a href="#page3" class="btn whitespace-nowrap header-center__button duration-200 hover:drop-shadow-md">
            О нас
          </a>
          <a href="#page4" class="btn header-center__button duration-200 hover:drop-shadow-md">
            Преимущество
          </a>
        </div>
        <div class="header-phone">
          <img class="header-phone__phone" src="../assets/phone.svg" alt="" />
          <button @click="changeVisibility('data_1')"
            class="btn header-phone__button whitespace-nowrap duration-200 hover:drop-shadow-md">
            Запись на прием
          </button>
        </div>
      </header>
      <teleport :to="`[data=${hints}]`" :disabled="!visible" v-if="isMounted">
        <ModalForm v-if="visible" v-model:visible="visible" />
      </teleport>
      <div class="main-first__title ">
        <h1 class="whitespace-nowrap">Профессиональное помощь<br /> с гарантией от срыва</h1>
      </div>
      <p class="mt-5 mb-5">АНОНИМНО КРУГЛОСУТОЧНО ДОСТУПНО</p>
      <div class="main-first-subtitle flex flex-col  ">
        <p class="leading-3 ">при записи на консультацию с сайта</p>
        <span class="leading-3 mt-5 ">скидка 10% на первый месяц реабилитации</span>
      </div>
      <button @click="changeVisibility('data_1')"
        class="btn main-first-subtitle__button mt-5 duration-200 hover:drop-shadow-md">
        Записаться
      </button>
    </main>
    <main id="page2" data="data_2" class="main-second min-h-[100vh]  relative">
      <div class="absolute top-0  left-0"></div>
      <div class="main-second-text">
        <p class="main-second-text__title">Услуги <br />центра социальной адаптации</p>
        <div class="main-second-text__center flex flex-col mt-[3rem]  gap-[3rem]">

          <p>Реабилитация:</p>
          <div class="main-second-text__div flex-col flex mt-[-2rem]  ml-[-3rem] gap-5">
            <p>помощь при наркомании</p>
            <p>помощь при алкоголизма</p>
            <p>помощь при игровой зависимости</p>
            <p>помощь при анарексии</p>
            <p>корекция девиантного поведения</p>
          </div>
          <p>Профессиональная сопроводительная терапия</p>
          <p>Психологическая поддержка</p>
        </div>
      </div>

      <div class="main-second-button">
        <button @click="changeVisibility('data_2')"
          class="btn main-first-subtitle__button consult hover:drop-shadow-md duration-200">
          Бесплатная консультация специалиста
        </button>
      </div>
    </main>
    <main id="page3" class="main-third flex flex-col  w-full bg-[#EBF8FF] min-h-screen  relative">

      <div class="main-third__page flex flex-col gap-2 pl-[15%] pt-[5%]">
        <div class="main-third__title">
          <h1 class="text-[3rem] text-[#009748] pb-[3rem]">О нас</h1>
        </div>
        <div class=" flex flex-col main-third-text ">
          <div class=" flex flex-row  gap-2 main-third-text__text">
            <h1 class="text-[3rem] text-[#206891]">Реабилитация</h1>
            <p @click="opensFlag[1] = !opensFlag[1]"
              class="closed text-[1.5rem] mt-4 text-[#206891] hover:underline  hover:drop-shadow-md duration-200 cursor-pointer">
              <span v-if="!opensFlag[1]">подробно</span><span v-if="opensFlag[1]" class="text-[#009748]">свернуть</span>
            </p>
          </div>
          <div v-if="opensFlag[1]" class="main-third-text__open w-1/2 pb-[2rem] ml-[15%] text-[1.2rem]"> Зависимость от
            психоактивных веществ
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
        <div class=" flex flex-col main-third-text">
          <div class=" flex gap-2 main-third-text__text">
            <h1 class="text-[3rem] text-[#206891]">Профессиональная сопроводительная терапия</h1>
            <p @click="opensFlag[2] = !opensFlag[2]"
              class="closed text-[1.5rem] mt-4 text-[#206891] hover:underline  hover:drop-shadow-md duration-200 cursor-pointer">
              <span v-if="!opensFlag[2]">подробно</span><span v-if="opensFlag[2]" class="text-[#009748]">свернуть</span>
            </p>
          </div>
          <div v-if="opensFlag[2]" class="main-third-text__open w-1/2 pb-[2rem] ml-[15%] text-[1.2rem]">
            *Профессиональная сопроводительная терапия (ПСТ)* – это комплексная психосоциальная поддержка для людей с
            наркотической зависимостью, направленная на снижение вреда, улучшение качества жизни и социальную
            реабилитацию.

            ### *Основные цели ПСТ:*
            1. *Снижение рисков* – предотвращение передозировок, ВИЧ/гепатитов, криминализации.
            2. *Стабилизация состояния* – помощь в преодолении «ломки».
            3. *Социальная адаптация* – трудоустройство, восстановление связей с семьей, интеграция в общество.
            4. *Поддержка ремиссии* – профилактика срывов, психологическая помощь.

            ### *Как проходит ПСТ?*

            #### *1. Психологическая поддержка*
            - *Индивидуальные консультации* – работа с психологом для выявления причин зависимости.
            - *Групповая терапия* (например, по программе «12 шагов»).
            - *Когнитивно-поведенческая терапия (КПТ)* – изменение деструктивных моделей мышления.

            #### *2. Социальная реабилитация*
            - *Помощь в трудоустройстве* – обучение, поиск работы.
            - *Семейная терапия* – восстановление отношений с близкими.
            - *Юридическая поддержка* – помощь в решении проблем с законом.

            #### *3. Долгосрочное сопровождение*
            - *Регулярные визиты к психологу.*
            - *Участие в группах поддержки.*
            - *Мониторинг состояния для предотвращения рецидивов.*

            ### *Эффективность ПСТ*
            Зависит от мотивации пациента, но статистика показывает:
            ✔️ Снижение смертности от передозировок.
            ✔️ Уменьшение криминальной активности.
            ✔️ Улучшение физического и психического здоровья.

            *Важно:* ПСТ – не принудительная мера, пациент должен сам стремиться к изменениям. В некоторых случаях
            терапия сочетается с программами полного отказа от наркотиков (например, в реабилитационных центрах).</div>
        </div>
        <div class=" flex flex-col main-third-text">
          <div class=" flex gap-2 main-third-text__text">
            <h1 class="text-[3rem] text-[#206891]">Психологическая поддержка</h1>
            <p @click="opensFlag[3] = !opensFlag[3]"
              class="closed text-[1.5rem] mt-4 text-[#206891] hover:underline  hover:drop-shadow-md duration-200 cursor-pointer">
              <span v-if="!opensFlag[3]">подробно</span><span v-if="opensFlag[3]" class="text-[#009748]">свернуть</span>
            </p>
          </div>
          <div v-if="opensFlag[3]" class="main-third-text__open w-1/2 pb-[2rem] ml-[15%] text-[1.2rem]"> Психологическая
            помощь – ключевой компонент помощи наркозависимым, направленный на проработку глубинных причин зависимости,
            изменение деструктивных установок и формирование здоровых моделей поведения.

            ## *1. Основные цели психологической поддержки*
            - *Выявление причин зависимости* (травмы, стресс, низкая самооценка, окружение).
            - *Коррекция поведения* – снижение тяги к наркотикам, профилактика срывов.
            - *Развитие навыков совладания* (coping-стратегии) – как справляться со стрессом без ПАВ.
            - *Восстановление эмоционального состояния* – работа с депрессией, тревогой, агрессией.
            - *Социальная адаптация* – помощь в налаживании отношений с семьёй и обществом.


            ## *2. Как проходит психологическая поддержка?*

            ### *① Индивидуально*
            *Формат:* Личные консультации с психологом.
            *Методы:*
            - *Когнитивно-поведенческая терапия (КПТ)* – выявление и изменение негативных мыслей и привычек.
            - *Мотивационное интервьюирование* – усиление желания отказаться от наркотиков.
            - *Гештальт-терапия* – проработка незавершённых эмоциональных процессов.
            - *Терапия принятия и ответственности (ACT)* – обучение жизни «здесь и сейчас».

            *Частота:* 1-2 сеанса в неделю (зависит от стадии реабилитации).

            ### *② Групповая терапия*
            *Формат:* Занятия в группах (6-12 человек) под руководством психолога.
            *Виды групп:*
            - *Группы поддержки* (например, по программе «12 шагов»).
            - *Тематические тренинги* (управление гневом, стрессоустойчивость).
            - *Группы для родственников* (созависимость, восстановление доверия).

            *Польза:*
            ✔️ Чувство общности («Я не один»).
            ✔️ Обмен опытом и поддержка.
            ✔️ Развитие коммуникативных навыков.

            ### *③ Семейная психотерапия*
            *Зачем?* Наркозависимость разрушает отношения, а семья может как помочь, так и невольно провоцировать
            рецидивы.
            *Работа включает:*
            - Анализ созависимых отношений.
            - Обучение правильной поддержке (без гиперопеки или агрессии).
            - Восстановление доверия и границ.

            ### *④ Кризисное консультирование*
            - Помощь при острых состояниях (паника, суицидальные мысли, ломка).
            - Телефоны доверия, онлайн-поддержка.


            ## *3. Кто оказывает психологическую помощь?*
            - *Клинические психологи* (работают в наркодиспансерах, реабилитационных центрах).
            - *Социальные работники* (помощь в адаптации).
            - *Равные консультанты* (бывшие зависимые, прошедшие реабилитацию).


            ## *4. Как долго длится психологическая поддержка?*
            - *Острая фаза* (первые месяцы отказа от наркотиков) – интенсивная терапия 2-3 раза в неделю.
            - *Стабилизация* (6-12 месяцев) – регулярные встречи 1 раз в 1-2 недели.
            - *Поддерживающая фаза* (1-3 года и более) – периодические консультации для профилактики рецидивов.


            ## *5. Эффективность психологической помощи*
            Исследования показывают, что у пациентов, получающих психологическую поддержку:
            ✅ На 40-60% снижается риск рецидивов.
            ✅ Улучшаются отношения в семье.
            ✅ Повышается мотивация к трезвой жизни.

            *Важно:* Психологическая помощь наиболее эффективна в сочетании с социальной реабилитацией.</div>
        </div>
        <!-- <div class=" flex flex-col main-third-text">
          <div class=" flex gap-2 main-third-text__text">
            <h1 class=" text-[#206891]">Кодирование от алкоголизма</h1>
            <p @click="opensFlag[4] = !opensFlag[4]"
              class="closed text-[1.5rem] mt-4 text-[#206891] hover:underline  hover:drop-shadow-md duration-200 cursor-pointer">
              <span v-if="!opensFlag[4]">подробно</span><span v-if="opensFlag[4]" class="text-[#009748]">свернуть</span>
            </p>
          </div>
          <div v-if="opensFlag[4]" class="main-third-text__open w-1/2 pb-[2rem] ml-[15%] text-[1.2rem]"> Кодирование
            уколом от алкогольной
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
        </div> -->
      </div>
      <div data="data_3" class="relative w-full"></div>
      <button @click="changeVisibility('data_3')"
        class="btn main-third-subtitle__button  consult mt-[5rem] mb-[2rem]   ml-[33%] bottom-[2rem] hover:drop-shadow-xl duration-200">
        Заказать звонок специалиста
      </button>

    </main>
    <main id="page4" class="main-fourth flex flex-col h-screen w-full  items-center">
      <div class="main-fourth__title flex flex-col items-start justify-center  pl-[10%]  pt-[5%] ">
        <h1 class="text-[#009748] mb-5">Преимущества нашего центра</h1>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5" src="../assets/plus.svg" />
          <p>100%
            Анонимность</p>
        </div>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5" src="../assets/plus.svg" />
          <p> Квалифицированные специалисты с многолетним опытом</p>
        </div>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5" src="../assets/plus.svg" />
          <p>Индивидуальный подход</p>
        </div>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5" src="../assets/plus.svg" />
          <p>Комфортные стационарные условия для прохождения
            курса реабилитации</p>
        </div>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5" src="../assets/plus.svg" />
          <p>4-х
            разовое сбалансированное питание</p>
        </div>
        <div class="flex text-[2rem] text-[#206891] gap-2 items-center"><img class="w-5" src="../assets/plus.svg" />
          <p>Занятие спортом на открытом воздухе</p>
        </div>
      </div>
      <div class="image flex  justify-center items-center justify-self-center  mt-10">
        <image-slider class=""></image-slider>
      </div>

    </main>
    <main class="main-five flex flex-col bg-cover min-h-screen w-full  items-start  justify-between   ">
      <div class="main-five__title flex ml-[7rem] ">
        <h1 class="text-[2rem] font-bold text-[#009748] ml-[5rem] mt-[2rem]">Отзывы</h1>
      </div>
      <div class="flex main-five__text">
        <div class="flex main-five__text_first  flex-col p-5 px-[3rem] gap-10">
          <div class="text-[1.5rem] text-[#009748]">Андрей 31 год</div>
          <div class="main-five__content text-[1rem] flex w-5/6">Всем привет. Меня зовут Андрей, мне 31 год. Употреблял
            более 10 лет. Перед
            тем как попасть в РЦ «СТАН» моя жизнь полностью была разрушена. Прошел необходимый курс реабилитации, соц.
            адаптацию и волонтерства. За время нахождения
            в центре я полностью изменил свое отношение к самому себе и к своему заболеванию. До меня донесли, что
            употребление наркотиков – это не просто моя дурная привычка, это заболевание, которое необходимо лечить и
            доверить этот процесс профессионалам. Мне помогли, поддержали, многому научили, дали те знания которые
            помогают мне по сей день оставаться трезвым и добиваться успехов в жизни. Действительно центр дал мне новую
            жизнь, я благодарен этому месту, людям которые помогали. Желаю вам процветания и всего наилучшего.</div>
        </div>

        <div class="flex main-five__text flex-col p-5 gap-10">
          <div class="text-[1.5rem] text-[#009748]">Дима 23 года</div>
          <div class="text-[1rem] flex w-5/6 main-five__content">Меня зовут Дмитрий мне 23 года
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

        <div class="flex main-five__text flex-col p-5 gap-10">
          <div class="text-[1.5rem] text-[#009748]">Елена 34 года</div>
          <div class="text-[1rem] flex w-5/6 main-five__content">
            <p class="font_agopt "> За моей спиной 12 лет наркотичесской зависимости, из них, как минимум
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
      <header class="header w-full">
        <a class="header-logo " href="#page1">
          <img src="../assets/stan_header.svg" alt="" />
        </a>
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
          <p class="text-[#73C9F7] lg:text-[2vw] text-[1.8rem] underline decoration-solid">stan-clinic@ya.ru</p>
        </div>
      </header>
    </main>

  </div>
</template>
<style scoped>
.btn {
  transition: 0.2s;
}

.btn:active {
  transform: scale(0.9)
}

.page1 {
  /* transform: translateZ(0); */
  font-family: AGOptCyrillic Normal;
  width: 100vw;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-overflow-scrolling: touch;

  overflow-x: hidden;
  scroll-behavior: smooth;
  overflow-y: auto;

}

.header {
  width: 100%;
  height: 16vh;
  display: flex;
  padding-top: 2rem;
  background-color: #Ffff;

}

.header-logo {
  width: max(33%, 15rem);
  padding-left: 3rem;
}

.header-logo img {
  width: max(18vw, 11rem);

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
  font-size: max(1vw, 1rem);
  line-height: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;

}

.header-phone {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: max(33%, 15rem);
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  padding-right: 3rem;
}

.header-phone__phone {
  width: 18rem;
}

.header-phone__button {
  width: auto;
  padding: 0.5rem 2rem 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(179.99deg, #70D7FD 23.43%, #94C5E9 98.73%);
  color: white;
  border-radius: 2rem;
  border: none;
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 500;
  font-size: max(1.5vw, 1.5rem);
  line-height: 1rem;
  text-align: center;
  cursor: pointer;
}

@media (max-width: 666px) {
  .header-center {
    display: none;
  }

  .header {
    height: 25vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1vh;
    /* height:fit-content; */
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  .header-logo {
    display: flex;
    width: 100%;
    justify-content: center;
    height: auto;
    padding: 0;
  }

  .header-phone {
    display: flex;
    width: 60%;
    padding: 0;
    justify-content: center;
    align-items: center;
    gap: 1vh;
  }
}

.main-first {
  width: 100vw;
  height: 100vh;
  background: url('../assets/main.png');
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;

}

.main-first__title {
  margin-top: 20vh;
  width: 45%;
}

.main-first__title>h1 {
  color: #206891;
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 700;
  font-size: max(3vw, 1.6rem);
  line-height: 4rem;
  text-align: center;
  margin-top: -5rem;
}

.main-first>p {

  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 700;
  font-size: max(2vw, 1.4rem);

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
  font-size: max(1.5vw, 1rem);
  /* line-height: 0.5rem; */
  text-align: center;
  color: #000000;
}

.main-first-subtitle>span {
  font-family: AGOptCyrillic Normal;
  font-style: italic;
  font-weight: 700;
  font-size: max(1.5vw, 1rem);
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
  font-size: max(2vw, 2rem);
  line-height: 1rem;
  text-align: center;
  /* width:20rem; */
  padding: 1.5rem 7rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

@media (max-width: 666px) {
  .main-first {
    height: 100vh;
  }

  .main-first__title {
    width: 100%;
    margin-top: 16vh;

  }

  .main-first__title h1 {
    line-height: 2rem;
  }

  .main-first-subtitle__button {
    padding: 1rem 2rem;
  }
}

.main-second {
  width: 100%;
  /* height: 100vh; */
  background: url('../assets/main2.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding-top:8rem; */

  gap: 5rem;
}

.main-second-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15%;
  /* transform: translateX(25%); */
  /* transform: translateY(25%); */
  margin-top: 5rem;
  display: flex;
  justify-content: flex-start;
}


.main-second-text__title {
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 600;
  font-size: max(2.5vw, 2rem);
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
  font-weight: 300;
  font-size: max(1.5vw, 1rem);
  line-height: 2rem;
  color: #206891;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}

.main-second-text__center>p {
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 700;
  font-size: max(2vw, 1.5rem);
  /* line-height: 1rem; */
  text-align: center;
  color: #206891;
  white-space: nowrap;
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

.main-second-text__div p {
  line-height: 1rem;
}

@media (max-width: 666px) {
  .main-second {
    gap: 1rem;
    padding: 0;
    /* justify-content: space-around; */
    align-items: center;
    /* min-height:150vh; */

    /* transform: translateY(-25%); */
  }

  .main-second-text {
    padding-left: 2rem;
    margin-top: 2rem;
    height: auto;
  }

  .main-second-text__title {
    width: 90%;
    line-height: 2rem;
  }

  .main-second-text__center {
    height: 100%;
    /* padding-left:0rem; */
  }

  .main-second-text__div {
    padding-left: 15%;
    display: flex;
    justify-content: flex-start;
    text-align: left;
  }

  .main-second-button {
    max-width: 80%;
  }
}

.main-second-button {
  display: flex;
  /* max-width:40%; */
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10rem;
}

.consult {
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: max(2vw, 1.5rem);
  display: flex;
  flex-direction: row;
}

.font_agopt {
  font-family: AGOptCyrillic Normal;
}

.main-third__title h1 {
  font-size: max(2.5vw, 2rem);
  font-weight: 800;
}

.main-third-text__text {
  align-items: center;
  justify-content: start;
}

.main-third-text__text h1 {
  font-size: max(2vw, 1.4rem);
  font-weight: 600;

}

.main-third-text__text p {
  font-size: max(1.3vw, 1rem);
  font-weight: 300;
  margin-bottom: 7px;

}

.main-third-subtitle__button {
  background: linear-gradient(179.99deg, #70D7FD 23.43%, #94C5E9 98.73%);
  color: white;
  border-radius: 2rem;
  border: none;
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 500;
  font-size: max(2vw, 1.5rem);
  line-height: 1rem;
  text-align: center;
  /* width:20rem; */
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 33%;
  margin-left: 33%;
}

@media (max-width: 666px) {
  .closed {
    margin-top: -1rem;
  }

  .main-third {

    align-items: center;
    /* min-height:100%; */
    width: 100%;


  }

  .main-third-text__text {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* min-height:100vh; */
  }

  .main-third__page {
    padding-left: 1rem;

  }

  .main-third-text__open {
    width: 80%;
    margin-left: 1rem;
    overflow: auto;
    height: 50vh;
  }

  .main-third-subtitle__button {
    width: 80%;
    margin-left: 0;
    padding: 1rem 0.5rem;
  }
}

.main-fourth__title {
  width: 90%;
}

.main-fourth__title h1 {
  font-size: max(2vw, 1.4rem);
  font-weight: 600;
}

.main-fourth__title p {
  font-weight: 600;
  font-size: max(1.5vw, 0.8rem);
}

.main-five {
  background-image: url('../assets/main.png');
}

@media (max-width: 666px) {
  .main-fourth {
    justify-content: space-around;
    gap: 3rem;
  }

  .main-five {
    padding: 1rem 0 0 0;
    justify-content: flex-start;


  }

  .main-five__title {
    margin-left: -4rem;
    padding: 0;
  }

  .main-five__text {
    flex-direction: column;
  }

  .main-five__text_first {
    padding: 1rem;
    ;
  }

  .main-five__content {
    width: 95%;
    vertical-align: middle;
  }

  .image {
    margin-top: -20rem;
  }

}
</style>