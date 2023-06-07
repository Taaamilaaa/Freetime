import Image from 'next/image';
import Category from './components/category';
import JobApplicationCard from './components/jobApplicationCard';
import PerformerCard from './components/performerCard';
import Response from './components/response';
import Input from './components/input';
import BlogCard from './components/blogCard';

export default function Home() {
    return (
        <div>
            <section className='h-fit w-full bg-[url("/images/plumber-228010_1920.jpg")] bg-cover bg-no-repeat bg-center '>
                <div className="lg:max-w-[1170px] mx-auto text-center">
                    <div className="items-center mb-[20px]">
                        {' '}
                        <div>
                            <button className='w-[60px] h-[62px] bg-[url("/images/icons/main-sl-left.png")] bg-no-repeat bg-contain absolute left-[60px] top-[215px]'></button>
                            <h1 className="text-[62px] leading-[100px] text-white uppercase  pt-[215px] pb-[150px]">
                                Потрібна допомога?
                            </h1>{' '}
                            <button className='w-[60px] h-[62px] bg-[url("/images/icons/main-sl-left.png")] bg-no-repeat bg-contain rotate-[180deg] absolute right-[60px] top-[215px]'></button>
                        </div>
                    </div>
                </div>
                <div className=" bg-shady-character/[0.6] w-full py-[16px]">
                    <div className="max-w-[1026px] mx-auto  px-[30px] ">
                        <h2 className="text-[34px] leading-[55px] text-white font-normal mb-[16px] text-center">
                            Знайдіть виконавця або волонтера за кілька кліків
                        </h2>
                        <form
                            action=""
                            className="grid grid-cols-[2fr_2fr_1fr] gap-x-[10px] mb-[18px]"
                        >
                            <Input placeholder={'Що потрібно зробити?'} />
                            <Input placeholder={'Виберіть місто'} />
                            <button
                                type="submit"
                                className="group hover:bg-white hover:text-clear-chill hover:border-dashed	border-clear-chill border-[1px] text-white h-[45px] bg-clear-chill py-[6px] px-[10px] rounded-[30px] mx-auto flex items-center justify-center w-[194px] text-[18px] leading-[25px]"
                            >
                                Пошук{' '}
                                <span className="inline-block w-[18px] h-[18px] ml-[10px]">
                                    <svg
                                        viewBox="0 0 18 18"
                                        xmlns="http://www.w3.org/2000/svg"
                                        _ngcontent-serverapp-c52=""
                                        aria-hidden="true"
                                        className="w-[18px] h-[18px] fill-white group-hover:fill-clear-chill"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.7553 14.6475L13.024 10.936C13.0041 10.9163 12.9809 10.9025 12.9601 10.8842C13.6943 9.77633 14.1228 8.45023 14.1228 7.02414C14.1228 3.14479 10.9613 0 7.06142 0C3.16152 0 0 3.14479 0 7.02407C0 10.9033 3.16145 14.0481 7.06136 14.0481C8.4951 14.0481 9.82819 13.6219 10.9419 12.8916C10.9604 12.9121 10.9742 12.9353 10.994 12.955L14.7254 16.6666C15.2859 17.2241 16.1947 17.2241 16.7553 16.6666C17.3157 16.1091 17.3157 15.2051 16.7553 14.6475ZM7.06142 11.6131C4.51341 11.6131 2.4479 9.55854 2.4479 7.02407C2.4479 4.48953 4.51348 2.43495 7.06142 2.43495C9.6093 2.43495 11.6749 4.4896 11.6749 7.02407C11.6749 9.55854 9.6093 11.6131 7.06142 11.6131Z"
                                            _ngcontent-serverapp-c52=""
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </form>
                        <div className="grid grid-rows-1 grid-cols-[2fr_3fr] gap-x-[10px] text-white text-start text-[16px]">
                            <span>
                                Наприклад: <span className="underline mr-[5px]">фотограф,</span>
                                <span className="underline mr-[5px]">створення сайтів,</span>
                                <span className="underline mr-[5px]">няня</span>
                            </span>
                            <span>
                                Більше 1000 перевірених фахівців та волонтерів. Погодинна оплата або
                                безкоштовні хоббі
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-doctor pb-[37px]">
                <div className="max-w-[1126px] mx-auto pt-[45px] ">
                    <div className="max-w-[1162px]  flex flex-row  justify-between items-center">
                        <button className='w-[31px] h-[32px] bg-[url("/images/icons/double-angle-pointing-to-right.png")] '></button>
                        <ul className="max-w-[1026px] mb-[31px] grid grid-cols-5 gap-x-[20px]">
                            <li className="text-center  mb-[20px]">
                                <span className='underline text-[16px] font-medium leading-[22px] text-clear-chill before:content[""] before:block before:w-[30px] before:h-[30px] before:bg-[url("/images/categoriesIcons/7ef98727b9.png")]  before:bg-no-repeat before:bg-center before:mx-auto before:mb-[21px]'>
                                    Будівельні роботи
                                </span>
                            </li>
                            <li className="text-center mb-[20px]">
                                <span className='underline text-[16px] font-medium leading-[22px] text-clear-chill before:content[""] before:block before:w-[30px] before:h-[30px] before:bg-[url("/images/categoriesIcons/36b612e85a.png")]  before:bg-no-repeat before:bg-center before:mx-auto before:mb-[21px]'>
                                    Побутові послуги
                                </span>
                            </li>
                            <li className="text-center  mb-[20px]">
                                <span className='underline text-[16px] font-medium leading-[22px] text-clear-chill before:content[""] before:block before:w-[30px] before:h-[30px] before:bg-[url("/images/categoriesIcons/413b741e2f.png")]  before:bg-no-repeat before:bg-center before:mx-auto before:mb-[21px]'>
                                    IT послуги та Фріланс
                                </span>
                            </li>
                            <li className="text-center mb-[20px]">
                                <span className='underline text-[16px] font-medium leading-[22px] text-clear-chill before:content[""] before:block before:w-[30px] before:h-[30px] before:bg-[url("/images/categoriesIcons/5451857ad5.png")]  before:bg-no-repeat before:bg-center before:mx-auto before:mb-[21px]'>
                                    Репетитори
                                </span>
                            </li>
                            <li className="text-center mb-[20px]">
                                <span className='underline text-[16px] font-medium leading-[22px] text-clear-chill  before:content[""] before:block before:w-[30px] before:h-[30px] before:bg-[url("/images/categoriesIcons/73ec110797b.png")]  before:bg-no-repeat before:bg-center before:mx-auto before:mb-[21px]'>
                                    Кур'єрські послуги
                                </span>
                            </li>
                        </ul>
                        <button className='w-[31px] h-[32px] bg-[url("/images/icons/double-angle-pointing-to-right.png")] rotate-[180deg]'></button>
                    </div>

                    <ul className="grid grid-cols-3 gap-x-[55px] gap-y-[52px]  text-[18px] leading-[25px] font-medium">
                        <Category title={'Домашній майстер'} urlString={'handyman-tools.png'} />
                        <Category title={'Оздоблювальні роботи'} urlString={'paintbrush.png'} />
                        <Category title={' Клінінгові послуги'} urlString={'vacuum.png'} />
                        <Category title={"Кур'єрські послуги"} urlString={'73ec110797b.png'} />
                        <Category title={'Ремонт техніки'} urlString={'washing-machine.png'} />
                        <Category
                            title={'Логістичні послуги'}
                            urlString={'delivery-packages-on-a-trolley.png'}
                        />
                        <Category title={'Ремонт авто'} urlString={'car-repair.png'} />
                        <Category title={'Робота в Інтернеті'} urlString={'413b741e2f.png'} />
                    </ul>
                </div>
            </section>
            <section className="bg-white-smoke pt-[60px] pb-[72px]">
                <div className="max-w-[1026px] mx-auto  ">
                    <h3 className="mb-[48px]">Ваш час - за гроші</h3>
                    <div className="grid grid-cols-[1fr_1fr] gap-x-[36px]">
                        <div>
                            <h5 className="mb-[26px] text-[28px] leading-[45px] ">
                                Потрібен додатковий заробіток?
                            </h5>
                            <p className="text-[20px] leading-[33px] text-carbon/[0.6] mb-[13px]">
                                Маєте кілька годин у день для роботи, волонтерства чи оримання нових
                                навичок? Хочете працювати на повну ставку? Або просто хочете скласти
                                компанію на рибалку? Тоді ви потрібні{' '}
                                <span className="text-clear-chill">FreeTime</span> . Погодинна
                                оплата <span className="text-clear-chill">ВАШОГО ЧАСУ</span> .
                            </p>
                            <button className="group hover:bg-white hover:text-clear-chill hover:border-dashed	border-clear-chill border-[1px] text-[14px] font-normal bg-clear-chill py-[11px] px-[23px] rounded-[30px] flex items-center justify-center text-white">
                                Стати виконавцем або волонтером
                                <span className=" inline-block w-[18px] h-[20px] ml-[10px] ">
                                    <svg
                                        viewBox="0 0 20 21"
                                        xmlns="http://www.w3.org/2000/svg"
                                        _ngcontent-serverapp-c52=""
                                        aria-hidden="true"
                                        className="w-[20px] h-[18px] fill-white group-hover:fill-clear-chill"
                                    >
                                        <path
                                            d="M11.8642 17.6363V18.2259C11.8642 18.6952 11.523 19.0855 11.0791 19.152L10.9352 19.6877C10.8571 19.9783 10.5981 20.1818 10.298 20.1818H8.87146C8.57136 20.1818 8.31237 19.9783 8.23426 19.6877L8.09449 19.152C7.64639 19.0814 7.30518 18.6952 7.30518 18.2218V17.6321C7.30518 17.3165 7.55595 17.0632 7.86839 17.0632H11.301C11.6135 17.0673 11.8642 17.3207 11.8642 17.6363ZM14.5076 9.6881C14.5076 11.0294 13.9814 12.2461 13.1263 13.1389C12.4768 13.82 12.0575 14.6879 11.9177 15.6139C11.856 16.0126 11.5148 16.3074 11.1119 16.3074H8.05749C7.65873 16.3074 7.31341 16.0167 7.25585 15.6181C7.11197 14.692 6.68854 13.8117 6.03901 13.1348C5.20037 12.2544 4.67828 11.0585 4.66595 9.74209C4.63717 6.97643 6.81598 4.73816 9.55388 4.7174C12.2877 4.69663 14.5076 6.93075 14.5076 9.6881ZM10.1418 6.67744C10.1418 6.37015 9.89509 6.11684 9.58677 6.11684C7.62995 6.11684 6.0349 7.72391 6.0349 9.70471C6.0349 10.012 6.28155 10.2653 6.58988 10.2653C6.89409 10.2653 7.14486 10.0162 7.14486 9.70471C7.14486 8.34265 8.24248 7.23805 9.58677 7.23805C9.89509 7.23805 10.1418 6.98889 10.1418 6.67744ZM9.58677 3.08541C9.89098 3.08541 10.1418 2.83625 10.1418 2.5248V0.560606C10.1418 0.253311 9.89509 0 9.58677 0C9.27845 0 9.03179 0.249158 9.03179 0.560606V2.5248C9.03179 2.83625 9.28256 3.08541 9.58677 3.08541ZM3.05445 9.68395C3.05445 9.37665 2.80779 9.12334 2.49947 9.12334H0.55498C0.250769 9.12334 7.84104e-09 9.3725 7.84104e-09 9.68395C7.84104e-09 9.99125 0.246658 10.2446 0.55498 10.2446H2.49947C2.80779 10.2446 3.05445 9.9954 3.05445 9.68395ZM18.6186 9.12334H16.6741C16.3699 9.12334 16.1191 9.3725 16.1191 9.68395C16.1191 9.99125 16.3658 10.2446 16.6741 10.2446H18.6186C18.9228 10.2446 19.1735 9.9954 19.1735 9.68395C19.1735 9.37665 18.9269 9.12334 18.6186 9.12334ZM4.18496 14.3515L2.80779 15.7426C2.58991 15.9627 2.58991 16.3157 2.80779 16.5358C2.91467 16.6438 3.05856 16.6978 3.19833 16.6978C3.3381 16.6978 3.48199 16.6438 3.58887 16.5358L4.96605 15.1447C5.18393 14.9246 5.18393 14.5716 4.96605 14.3515C4.75228 14.1314 4.39873 14.1314 4.18496 14.3515ZM14.598 5.18249C14.7378 5.18249 14.8817 5.12851 14.9886 5.02054L16.3658 3.62941C16.5836 3.40932 16.5836 3.05634 16.3658 2.83625C16.1479 2.61616 15.7984 2.61616 15.5806 2.83625L14.2034 4.22739C13.9855 4.44747 13.9855 4.80045 14.2034 5.02054C14.3144 5.12851 14.4542 5.18249 14.598 5.18249ZM4.18496 5.01639C4.29185 5.12435 4.43573 5.17834 4.5755 5.17834C4.71528 5.17834 4.85916 5.12435 4.96605 5.01639C5.18393 4.7963 5.18393 4.44332 4.96605 4.22323L3.58887 2.8321C3.37099 2.61201 3.02156 2.61201 2.80368 2.8321C2.5858 3.05219 2.5858 3.40516 2.80368 3.62525L4.18496 5.01639ZM14.9886 14.3515C14.7707 14.1314 14.4213 14.1314 14.2034 14.3515C13.9855 14.5716 13.9855 14.9246 14.2034 15.1447L15.5806 16.5358C15.6874 16.6438 15.8313 16.6978 15.9711 16.6978C16.1109 16.6978 16.2548 16.6438 16.3616 16.5358C16.5795 16.3157 16.5795 15.9627 16.3616 15.7426L14.9886 14.3515Z"
                                            _ngcontent-serverapp-c52=""
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div>
                            <img src="/images/Mask Group.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[42px] ">
                <h3 className="mb-[48px]">останні заявки</h3>
                <div className=" max-w-[1162px] mx-auto flex flex-row justify-between items-center">
                    <button className='w-[31px] h-[32px] bg-[url("/images/icons/double-angle-pointing-to-right.png")] '></button>
                    <ul className="grid grid-cols-3  gap-x-[62px] max-w-[1026px] mx-auto ">
                        <li className="">
                            <JobApplicationCard
                                type={'Заявка на роботу'}
                                title={'Потрібен маляр'}
                                text={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                                }
                                price={'400 грн'}
                                favoriteIndicator={true}
                            />
                        </li>
                        <li>
                            <JobApplicationCard
                                type={'Заявка на роботу'}
                                title={'Послуги Сантехніка'}
                                text={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                                }
                                price={'700 грн'}
                                favoriteIndicator={false}
                            />
                        </li>
                        <li>
                            <JobApplicationCard
                                type={'Заявка на роботу'}
                                title={'Шукаю няню'}
                                text={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                                }
                                price={'500 грн'}
                                favoriteIndicator={true}
                            />
                        </li>
                    </ul>
                    <button className='w-[31px] h-[32px] bg-[url("/images/icons/double-angle-pointing-to-right.png")] rotate-[180deg]'></button>
                </div>
            </section>
            <section className="pt-[72px] pb-[79px] bg-white-smoke">
                <h3 className="mb-[42px]">зараз на сайті</h3>
                <ul className="grid grid-cols-3 max-w-[1026px] mx-auto ">
                    <li className="text-center font-bold uppercase ">
                        <span className="flex flex-row items-center justify-center mb-[25px] text-[28px] leading-[45px] text-aqua-belt before:content-[''] before:inline-block before:w-[37px] before:h-[37px] before:bg-[url('/images/icons/001-idea.png')] before:bg-no-repeat before:bg-contin before:bg-center before:mr-[6px]">
                            6548
                        </span>
                        <p className="text-[18px] leading-[29px] "> професіоналів та волонтерів</p>
                    </li>
                    <li className="text-center  font-bold uppercase">
                        <span className="flex flex-row items-center justify-center mb-[25px] text-[28px] leading-[45px] text-pink-charge before:content-[''] before:inline-block before:w-[37px] before:h-[37px] before:bg-[url('/images/icons/003-computer.png')] before:bg-no-repeat before:bg-contin before:bg-center before:mr-[6px]">
                            4684
                        </span>
                        <p className="text-[18px] leading-[29px] "> вакансій та пропозицій</p>
                    </li>
                    <li className="text-center  font-bold uppercase">
                        <span className="flex flex-row items-center justify-center mb-[25px] text-[28px] leading-[45px] text-herty-hosta before:content-[''] before:inline-block before:w-[37px] before:h-[37px] before:bg-[url('/images/icons/004-stamp.png')] before:bg-no-repeat before:bg-contin before:bg-center before:mr-[6px]">
                            7642
                        </span>
                        <p className="text-[18px] leading-[29px]  "> виконаних робіт та проектів</p>
                    </li>
                </ul>
            </section>
            <section className="pt-[37px] pb-[47px]">
                <h3 className="mb-[48px]">топ виконавців</h3>
                <div className=" max-w-[1162px] mx-auto flex flex-row justify-between items-center ">
                    <button className='w-[31px] h-[32px] bg-[url("/images/icons/double-angle-pointing-to-right.png")] '></button>
                    <ul className="grid grid-cols-3  gap-x-[62px] max-w-[1026px] mx-auto ">
                        <li className="">
                            <PerformerCard
                                type={'Виконавці'}
                                title={'Няня з освітою вихователя'}
                                text={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                                }
                                price={'50 грн / год'}
                                favoriteIndicator={false}
                                name={'Оксана'}
                                nickname={'oks_teach24'}
                                img={'image_1.png'}
                            />
                        </li>
                        <li className="">
                            <PerformerCard
                                type={'Виконавці'}
                                title={'Персональний тренер з фітнесу та TRX'}
                                text={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                                }
                                price={'100 грн'}
                                favoriteIndicator={true}
                                name={'Ігор'}
                                nickname={'irka_777'}
                                img={'image_2.png'}
                            />
                        </li>
                        <li className="">
                            <PerformerCard
                                type={'Волонтери'}
                                title={'Хочу навчитися шити іграшки. Маю 3 години в день'}
                                text={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                                }
                                price={'Безкоштовно'}
                                favoriteIndicator={true}
                                name={'Ірина'}
                                nickname={'irka_777'}
                                img={'user.png'}
                            />
                        </li>
                    </ul>
                    <button className='w-[31px] h-[32px] bg-[url("/images/icons/double-angle-pointing-to-right.png")] rotate-[180deg]'></button>
                </div>
            </section>
            <section className="pt-[67px] pb-[72px] bg-white">
                <h3 className="mb-[32px]">Як це працює</h3>
                <ul className="grid grid-cols-3 gap-x-[28px] mb-[51px] max-w-[626px] mx-auto">
                    <li>
                        <button
                            type="button"
                            className="group hover:bg-white hover:text-shady-character hover:border-dashed border-[1px] border-clear-chill text-white h-[37px] bg-clear-chill py-[11px] px-[20px] rounded-[30px] flex items-center justify-center w-[193px] text-[14px] leading-[19px] font-normal"
                        >
                            Для роботодавця
                            <span>
                                <svg
                                    width="17"
                                    height="20"
                                    viewBox="0 0 9 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-[9px]"
                                >
                                    <path
                                        d="M7.83788 7.51562C6.73772 7.07249 6.07762 6.62036 6.07762 6.62036L5.22953 9.44559L5.11417 9.82798L4.73392 8.69429C5.60764 7.41214 4.6677 7.35141 4.50534 7.34916H4.5032H4.50107H4.49893H4.4968C4.33444 7.35141 3.39449 7.41214 4.26822 8.69429L3.88797 9.82798L3.77261 9.44559L2.92452 6.62036C2.92452 6.62036 2.26442 7.07249 1.16425 7.51562C-0.0512699 7.97899 0.0234987 9.02945 -3.25965e-08 10.9999H4.49466H4.50534H9C8.97437 9.02945 9.04913 7.97899 7.83788 7.51562Z"
                                        className="fill-white group-hover:fill-shady-character"
                                    />
                                    <path
                                        d="M4.53274 2.32614L5.02621 1.80653C4.41952 1.59059 3.72311 1.7368 3.24031 2.24516C2.56312 2.95822 2.56312 4.11665 3.24031 4.8297C3.9175 5.54276 5.01767 5.54276 5.69486 4.8297C6.17765 4.32134 6.31651 3.58804 6.11143 2.94922L5.61795 3.46882C5.63504 3.80173 5.52396 4.14139 5.28256 4.39557C4.83182 4.87019 4.10336 4.87019 3.65261 4.39557C3.20186 3.92095 3.20186 3.15391 3.65261 2.67929C3.89401 2.42511 4.21658 2.30814 4.53274 2.32614Z"
                                        className="fill-white group-hover:fill-shady-character"
                                    />
                                    <path
                                        d="M6.53725 5.71567C7.49215 4.7102 7.65023 3.18287 7.00722 2.00419L6.53511 2.5013C6.93886 3.39656 6.78933 4.50101 6.0865 5.24105C5.19142 6.18355 3.74304 6.18355 2.84795 5.24105C1.95287 4.29856 1.95287 2.77348 2.84795 1.83099C3.55292 1.09094 4.59968 0.931235 5.4499 1.35862L5.92201 0.861504C4.80475 0.186689 3.35211 0.350894 2.39721 1.35637C1.25432 2.55979 1.25432 4.51 2.39721 5.71567C3.54223 6.91909 5.39436 6.91909 6.53725 5.71567Z"
                                        className="fill-white group-hover:fill-shady-character"
                                    />
                                    <path
                                        d="M4.62751 2.93095C4.57624 2.9152 4.52283 2.90845 4.46729 2.90845C4.13617 2.90845 3.86914 3.18963 3.86914 3.53828C3.86914 3.88694 4.13617 4.16811 4.46729 4.16811C4.79841 4.16811 5.06544 3.88694 5.06544 3.53828C5.06544 3.4798 5.05689 3.42356 5.04408 3.36958L6.71248 1.61281L6.98165 1.65105L7.82547 0.762541L7.18673 0.672566L7.10128 0L6.2596 0.888507L6.29591 1.17193L4.62751 2.93095Z"
                                        className="fill-white group-hover:fill-shady-character"
                                    />
                                </svg>
                            </span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="group hover:bg-white hover:text-shady-character hover:border-dashed border-[1px] border-clear-chill text-white h-[37px] bg-clear-chill py-[11px] px-[20px] rounded-[30px]  flex items-center justify-center w-[193px] text-[14px] leading-[19px] font-normal"
                        >
                            Для виконавця
                            <span>
                                <svg
                                    viewBox="0 0 20 21"
                                    xmlns="http://www.w3.org/2000/svg"
                                    _ngcontent-serverapp-c52=""
                                    aria-hidden="true"
                                    className="w-[19px] h-[20px] fill-white group-hover:fill-shady-character ml-[5px]"
                                >
                                    <path
                                        d="M11.8642 17.6363V18.2259C11.8642 18.6952 11.523 19.0855 11.0791 19.152L10.9352 19.6877C10.8571 19.9783 10.5981 20.1818 10.298 20.1818H8.87146C8.57136 20.1818 8.31237 19.9783 8.23426 19.6877L8.09449 19.152C7.64639 19.0814 7.30518 18.6952 7.30518 18.2218V17.6321C7.30518 17.3165 7.55595 17.0632 7.86839 17.0632H11.301C11.6135 17.0673 11.8642 17.3207 11.8642 17.6363ZM14.5076 9.6881C14.5076 11.0294 13.9814 12.2461 13.1263 13.1389C12.4768 13.82 12.0575 14.6879 11.9177 15.6139C11.856 16.0126 11.5148 16.3074 11.1119 16.3074H8.05749C7.65873 16.3074 7.31341 16.0167 7.25585 15.6181C7.11197 14.692 6.68854 13.8117 6.03901 13.1348C5.20037 12.2544 4.67828 11.0585 4.66595 9.74209C4.63717 6.97643 6.81598 4.73816 9.55388 4.7174C12.2877 4.69663 14.5076 6.93075 14.5076 9.6881ZM10.1418 6.67744C10.1418 6.37015 9.89509 6.11684 9.58677 6.11684C7.62995 6.11684 6.0349 7.72391 6.0349 9.70471C6.0349 10.012 6.28155 10.2653 6.58988 10.2653C6.89409 10.2653 7.14486 10.0162 7.14486 9.70471C7.14486 8.34265 8.24248 7.23805 9.58677 7.23805C9.89509 7.23805 10.1418 6.98889 10.1418 6.67744ZM9.58677 3.08541C9.89098 3.08541 10.1418 2.83625 10.1418 2.5248V0.560606C10.1418 0.253311 9.89509 0 9.58677 0C9.27845 0 9.03179 0.249158 9.03179 0.560606V2.5248C9.03179 2.83625 9.28256 3.08541 9.58677 3.08541ZM3.05445 9.68395C3.05445 9.37665 2.80779 9.12334 2.49947 9.12334H0.55498C0.250769 9.12334 7.84104e-09 9.3725 7.84104e-09 9.68395C7.84104e-09 9.99125 0.246658 10.2446 0.55498 10.2446H2.49947C2.80779 10.2446 3.05445 9.9954 3.05445 9.68395ZM18.6186 9.12334H16.6741C16.3699 9.12334 16.1191 9.3725 16.1191 9.68395C16.1191 9.99125 16.3658 10.2446 16.6741 10.2446H18.6186C18.9228 10.2446 19.1735 9.9954 19.1735 9.68395C19.1735 9.37665 18.9269 9.12334 18.6186 9.12334ZM4.18496 14.3515L2.80779 15.7426C2.58991 15.9627 2.58991 16.3157 2.80779 16.5358C2.91467 16.6438 3.05856 16.6978 3.19833 16.6978C3.3381 16.6978 3.48199 16.6438 3.58887 16.5358L4.96605 15.1447C5.18393 14.9246 5.18393 14.5716 4.96605 14.3515C4.75228 14.1314 4.39873 14.1314 4.18496 14.3515ZM14.598 5.18249C14.7378 5.18249 14.8817 5.12851 14.9886 5.02054L16.3658 3.62941C16.5836 3.40932 16.5836 3.05634 16.3658 2.83625C16.1479 2.61616 15.7984 2.61616 15.5806 2.83625L14.2034 4.22739C13.9855 4.44747 13.9855 4.80045 14.2034 5.02054C14.3144 5.12851 14.4542 5.18249 14.598 5.18249ZM4.18496 5.01639C4.29185 5.12435 4.43573 5.17834 4.5755 5.17834C4.71528 5.17834 4.85916 5.12435 4.96605 5.01639C5.18393 4.7963 5.18393 4.44332 4.96605 4.22323L3.58887 2.8321C3.37099 2.61201 3.02156 2.61201 2.80368 2.8321C2.5858 3.05219 2.5858 3.40516 2.80368 3.62525L4.18496 5.01639ZM14.9886 14.3515C14.7707 14.1314 14.4213 14.1314 14.2034 14.3515C13.9855 14.5716 13.9855 14.9246 14.2034 15.1447L15.5806 16.5358C15.6874 16.6438 15.8313 16.6978 15.9711 16.6978C16.1109 16.6978 16.2548 16.6438 16.3616 16.5358C16.5795 16.3157 16.5795 15.9627 16.3616 15.7426L14.9886 14.3515Z"
                                        _ngcontent-serverapp-c52=""
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="group hover:bg-white hover:text-shady-character hover:border-dashed border-[1px] border-question-mark-block text-white h-[37px] bg-question-mark-block py-[11px] px-[15px] rounded-[30px]  flex items-center justify-center w-[193px] text-[14px] leading-[19px] font-normal"
                        >
                            Для волонтерів
                            <span>
                                <svg
                                    width="19"
                                    height="15"
                                    viewBox="0 0 19 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[19px] h-[15px] fill-white group-hover:fill-shady-character ml-[5px]"
                                >
                                    <path
                                        d="M9.61554 5.66488C11.2682 5.66488 12.6079 4.39675 12.6079 2.83244C12.6079 1.26813 11.2682 0 9.61554 0C7.96288 0 6.62314 1.26813 6.62314 2.83244C6.62314 4.39675 7.96288 5.66488 9.61554 5.66488Z"
                                        className=" fill-white group-hover:fill-shady-character"
                                    />
                                    <path
                                        d="M18.449 2.05922C17.7896 1.52951 16.806 1.60711 16.2488 2.23024L11.8437 7.14357C11.2757 6.59741 10.4897 6.25601 9.61548 6.25601C8.67779 6.25601 7.8466 6.65498 7.27494 7.27431L2.75247 2.22961C2.19239 1.60732 1.20903 1.53035 0.550714 2.05859C-0.106492 2.58725 -0.186917 3.51951 0.371152 4.14201L6.24925 10.6976C6.32255 10.7801 6.40609 10.852 6.49364 10.9157V15H12.7389V10.709C12.7436 10.7046 12.748 10.7018 12.7531 10.6974L18.629 4.1418C19.1864 3.52015 19.1071 2.58788 18.449 2.05922ZM11.7393 9.937C11.7201 9.9933 11.6994 10.0871 11.6644 10.1765C11.6354 10.2676 11.6005 10.3771 11.5593 10.5036C11.5225 10.6261 11.4793 10.7518 11.4341 10.876C11.3899 11.0036 11.3425 11.1409 11.2877 11.2651C11.2329 11.3914 11.1772 11.5306 11.1086 11.6518C10.9789 11.9057 10.8158 12.1482 10.622 12.3776C10.5273 12.4961 10.4177 12.6007 10.3079 12.711C10.1983 12.8186 10.0751 12.9175 9.95144 13.0155C9.82668 13.1094 9.69702 13.2003 9.56112 13.2827C9.42545 13.3628 9.29111 13.44 9.15499 13.5077C9.01932 13.5754 8.8852 13.6349 8.76022 13.6867C8.67512 13.7228 8.59091 13.7532 8.51361 13.7791L8.24025 13.7806C8.25585 13.7365 8.27233 13.691 8.29016 13.6427C8.41068 13.3274 8.59403 12.9118 8.81815 12.5177C8.92976 12.3192 9.05608 12.1294 9.18106 11.9548C9.24812 11.8711 9.31228 11.7904 9.3731 11.7136C9.44016 11.64 9.50409 11.5706 9.56358 11.5072C9.62751 11.4496 9.68521 11.3954 9.73735 11.3484C9.78859 11.2986 9.84294 11.2668 9.88238 11.2345C9.96592 11.1752 10.0136 11.1407 10.0136 11.1407C10.0136 11.1407 9.96369 11.171 9.87636 11.2256C9.83181 11.2547 9.77589 11.2822 9.72108 11.3281C9.66494 11.3728 9.601 11.4211 9.53083 11.4768C9.46533 11.5358 9.39493 11.601 9.32163 11.6693C9.25257 11.744 9.1795 11.8209 9.10509 11.9011C8.96318 12.0685 8.81882 12.2526 8.68916 12.4453C8.42694 12.8306 8.20594 13.2399 8.05445 13.553C8.02549 13.6165 7.99809 13.6749 7.97336 13.7283C7.95687 13.6893 7.93838 13.6452 7.92412 13.5986C7.89204 13.4988 7.85217 13.3761 7.82655 13.2414C7.80048 13.1051 7.78355 12.9577 7.77664 12.799C7.76862 12.4843 7.80716 12.1292 7.92724 11.7815C7.98182 11.6054 8.06292 11.4323 8.15738 11.2634C8.24894 11.0945 8.36902 10.9336 8.49177 10.7784C8.62433 10.6253 8.76891 10.4825 8.92174 10.3512C9.08482 10.2236 9.24812 10.1059 9.42768 10.01C9.61214 9.91697 9.78591 9.83093 9.97684 9.77695C10.1684 9.72191 10.3475 9.67868 10.5238 9.65717C10.7051 9.64283 10.8729 9.64051 11.0195 9.64853C11.1665 9.65422 11.312 9.69618 11.4196 9.72085C11.5263 9.74257 11.6163 9.78285 11.6735 9.80309C11.7301 9.82481 11.7635 9.84211 11.7635 9.84211C11.7635 9.84211 11.7562 9.87479 11.7393 9.937Z"
                                        className=" fill-white group-hover:fill-shady-character"
                                    />
                                </svg>
                            </span>
                        </button>
                    </li>
                </ul>
                <div className="max-w-[1027px] mx-auto">
                    <ul className="flex items-center justify-between">
                        <li>
                            <div className="w-[198px] h-[198px] rounded-[50%] pt-[47px] text-center shadow-[0px_2px_12px_rgba(0,0,0,0.15)] ">
                                <p className='text-[16px] font-medium leading-[22px] before:content-[""] before:block before:w-[52px] before:h-[53px] before:bg-[url("/images/icons/002-contract.png")] before:bg-no-repeat before:bg-center before:mx-auto before:mb-[16px]'>
                                    Залишаєте <br /> заявку
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='w-[118px] h-[30px] bg-[url("/images/icons/arrow.png")] bg-no-repet bg-center'></div>
                        </li>
                        <li>
                            <div className="w-[198px] h-[198px] rounded-[50%] pt-[47px] text-center shadow-[0px_2px_12px_rgba(0,0,0,0.15)] ">
                                <p className='text-[16px] font-medium leading-[22px] before:content-[""] before:block before:w-[52px] before:h-[53px] before:bg-[url("/images/icons/001-group.png")] before:bg-no-repeat before:bg-center before:mx-auto before:mb-[16px]'>
                                    Отримуєте
                                    <br />
                                    відгуки
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='w-[118px] h-[30px] bg-[url("/images/icons/arrow.png")] bg-no-repet bg-center'></div>
                        </li>
                        <li>
                            <div className="w-[198px] h-[198px] rounded-[50%] pt-[47px] text-center shadow-[0px_2px_12px_rgba(0,0,0,0.15)] ">
                                <p className='text-[16px] font-medium leading-[22px] before:content-[""] before:block before:w-[52px] before:h-[53px] before:bg-[url("/images/icons/003-prize.png")] before:bg-no-repeat before:bg-center before:mx-auto before:mb-[16px]'>
                                    Вибираєте <br /> найкращого
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='text-white bg-[url("/images/mask_group.jpg")] bg-no-repeat bg-cover pt-[25px] pb-[48px] bg-bottom'>
                <h3 className=" pb-[75px]">Відгуки</h3>
                <div className="relative max-w-[1162px] mx-auto">
                    <button className='w-[60px] h-[62px] bg-[url("/images/icons/main-sl-left.png")] bg-no-repeat bg-contain absolute top-[50%] translate-y-[-50%] left-0 '></button>
                    <button className='w-[60px] h-[62px] bg-[url("/images/icons/main-sl-left.png")] bg-no-repeat bg-contain rotate-[180deg] absolute top-[50%] translate-y-[-50%] right-0 '></button>
                    <div className="flex flex-cols justify-center mb-[61px]">
                        <div className='w-[127px] h-[127px] rounded-[50%] bg-[url("/images/image_3.png")] mr-[13px]'></div>
                        <Response
                            title={'Василь Кросенець'}
                            date={'02.07.2018'}
                            text={
                                'Дуже крутий сервіс, знайшов виконаця за 1 день. Все зробили. Дуже задоволений буду користуватися і ремомендувати друзям. Дякую команді FreeTime за можлдивість економити час та гроші. Круто!'
                            }
                        />
                    </div>
                    <ul className="grid grid-cols-3 gap-x-[28px] mb-[51px] max-w-[626px] mx-auto">
                        <li>
                            <button
                                type="button"
                                className="group hover:bg-white hover:text-clear-chill hover:border-dashed border-[1px] border-clear-chill text-white h-[37px] bg-clear-chill py-[11px] px-[15px] rounded-[30px] flex items-center justify-center w-[193px] text-[14px] leading-[19px] font-normal"
                            >
                                Знайти спеціаліста
                                <span>
                                    <svg
                                        width="17"
                                        height="20"
                                        viewBox="0 0 9 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-[9px]"
                                    >
                                        <path
                                            d="M7.83788 7.51562C6.73772 7.07249 6.07762 6.62036 6.07762 6.62036L5.22953 9.44559L5.11417 9.82798L4.73392 8.69429C5.60764 7.41214 4.6677 7.35141 4.50534 7.34916H4.5032H4.50107H4.49893H4.4968C4.33444 7.35141 3.39449 7.41214 4.26822 8.69429L3.88797 9.82798L3.77261 9.44559L2.92452 6.62036C2.92452 6.62036 2.26442 7.07249 1.16425 7.51562C-0.0512699 7.97899 0.0234987 9.02945 -3.25965e-08 10.9999H4.49466H4.50534H9C8.97437 9.02945 9.04913 7.97899 7.83788 7.51562Z"
                                            className="fill-white group-hover:fill-clear-chill"
                                        />
                                        <path
                                            d="M4.53274 2.32614L5.02621 1.80653C4.41952 1.59059 3.72311 1.7368 3.24031 2.24516C2.56312 2.95822 2.56312 4.11665 3.24031 4.8297C3.9175 5.54276 5.01767 5.54276 5.69486 4.8297C6.17765 4.32134 6.31651 3.58804 6.11143 2.94922L5.61795 3.46882C5.63504 3.80173 5.52396 4.14139 5.28256 4.39557C4.83182 4.87019 4.10336 4.87019 3.65261 4.39557C3.20186 3.92095 3.20186 3.15391 3.65261 2.67929C3.89401 2.42511 4.21658 2.30814 4.53274 2.32614Z"
                                            className="fill-white group-hover:fill-clear-chill"
                                        />
                                        <path
                                            d="M6.53725 5.71567C7.49215 4.7102 7.65023 3.18287 7.00722 2.00419L6.53511 2.5013C6.93886 3.39656 6.78933 4.50101 6.0865 5.24105C5.19142 6.18355 3.74304 6.18355 2.84795 5.24105C1.95287 4.29856 1.95287 2.77348 2.84795 1.83099C3.55292 1.09094 4.59968 0.931235 5.4499 1.35862L5.92201 0.861504C4.80475 0.186689 3.35211 0.350894 2.39721 1.35637C1.25432 2.55979 1.25432 4.51 2.39721 5.71567C3.54223 6.91909 5.39436 6.91909 6.53725 5.71567Z"
                                            className="fill-white group-hover:fill-clear-chill"
                                        />
                                        <path
                                            d="M4.62751 2.93095C4.57624 2.9152 4.52283 2.90845 4.46729 2.90845C4.13617 2.90845 3.86914 3.18963 3.86914 3.53828C3.86914 3.88694 4.13617 4.16811 4.46729 4.16811C4.79841 4.16811 5.06544 3.88694 5.06544 3.53828C5.06544 3.4798 5.05689 3.42356 5.04408 3.36958L6.71248 1.61281L6.98165 1.65105L7.82547 0.762541L7.18673 0.672566L7.10128 0L6.2596 0.888507L6.29591 1.17193L4.62751 2.93095Z"
                                            className="fill-white group-hover:fill-clear-chill"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="group hover:bg-white hover:text-clear-chill hover:border-dashed border-[1px] border-clear-chill text-white h-[37px] bg-clear-chill py-[11px] px-[15px] rounded-[30px]  flex items-center justify-center w-[193px] text-[14px] leading-[19px] font-normal"
                            >
                                Стати виконавцем
                                <span>
                                    <svg
                                        viewBox="0 0 20 21"
                                        xmlns="http://www.w3.org/2000/svg"
                                        _ngcontent-serverapp-c52=""
                                        aria-hidden="true"
                                        className="w-[19px] h-[20px] fill-white group-hover:fill-clear-chill ml-[5px]"
                                    >
                                        <path
                                            d="M11.8642 17.6363V18.2259C11.8642 18.6952 11.523 19.0855 11.0791 19.152L10.9352 19.6877C10.8571 19.9783 10.5981 20.1818 10.298 20.1818H8.87146C8.57136 20.1818 8.31237 19.9783 8.23426 19.6877L8.09449 19.152C7.64639 19.0814 7.30518 18.6952 7.30518 18.2218V17.6321C7.30518 17.3165 7.55595 17.0632 7.86839 17.0632H11.301C11.6135 17.0673 11.8642 17.3207 11.8642 17.6363ZM14.5076 9.6881C14.5076 11.0294 13.9814 12.2461 13.1263 13.1389C12.4768 13.82 12.0575 14.6879 11.9177 15.6139C11.856 16.0126 11.5148 16.3074 11.1119 16.3074H8.05749C7.65873 16.3074 7.31341 16.0167 7.25585 15.6181C7.11197 14.692 6.68854 13.8117 6.03901 13.1348C5.20037 12.2544 4.67828 11.0585 4.66595 9.74209C4.63717 6.97643 6.81598 4.73816 9.55388 4.7174C12.2877 4.69663 14.5076 6.93075 14.5076 9.6881ZM10.1418 6.67744C10.1418 6.37015 9.89509 6.11684 9.58677 6.11684C7.62995 6.11684 6.0349 7.72391 6.0349 9.70471C6.0349 10.012 6.28155 10.2653 6.58988 10.2653C6.89409 10.2653 7.14486 10.0162 7.14486 9.70471C7.14486 8.34265 8.24248 7.23805 9.58677 7.23805C9.89509 7.23805 10.1418 6.98889 10.1418 6.67744ZM9.58677 3.08541C9.89098 3.08541 10.1418 2.83625 10.1418 2.5248V0.560606C10.1418 0.253311 9.89509 0 9.58677 0C9.27845 0 9.03179 0.249158 9.03179 0.560606V2.5248C9.03179 2.83625 9.28256 3.08541 9.58677 3.08541ZM3.05445 9.68395C3.05445 9.37665 2.80779 9.12334 2.49947 9.12334H0.55498C0.250769 9.12334 7.84104e-09 9.3725 7.84104e-09 9.68395C7.84104e-09 9.99125 0.246658 10.2446 0.55498 10.2446H2.49947C2.80779 10.2446 3.05445 9.9954 3.05445 9.68395ZM18.6186 9.12334H16.6741C16.3699 9.12334 16.1191 9.3725 16.1191 9.68395C16.1191 9.99125 16.3658 10.2446 16.6741 10.2446H18.6186C18.9228 10.2446 19.1735 9.9954 19.1735 9.68395C19.1735 9.37665 18.9269 9.12334 18.6186 9.12334ZM4.18496 14.3515L2.80779 15.7426C2.58991 15.9627 2.58991 16.3157 2.80779 16.5358C2.91467 16.6438 3.05856 16.6978 3.19833 16.6978C3.3381 16.6978 3.48199 16.6438 3.58887 16.5358L4.96605 15.1447C5.18393 14.9246 5.18393 14.5716 4.96605 14.3515C4.75228 14.1314 4.39873 14.1314 4.18496 14.3515ZM14.598 5.18249C14.7378 5.18249 14.8817 5.12851 14.9886 5.02054L16.3658 3.62941C16.5836 3.40932 16.5836 3.05634 16.3658 2.83625C16.1479 2.61616 15.7984 2.61616 15.5806 2.83625L14.2034 4.22739C13.9855 4.44747 13.9855 4.80045 14.2034 5.02054C14.3144 5.12851 14.4542 5.18249 14.598 5.18249ZM4.18496 5.01639C4.29185 5.12435 4.43573 5.17834 4.5755 5.17834C4.71528 5.17834 4.85916 5.12435 4.96605 5.01639C5.18393 4.7963 5.18393 4.44332 4.96605 4.22323L3.58887 2.8321C3.37099 2.61201 3.02156 2.61201 2.80368 2.8321C2.5858 3.05219 2.5858 3.40516 2.80368 3.62525L4.18496 5.01639ZM14.9886 14.3515C14.7707 14.1314 14.4213 14.1314 14.2034 14.3515C13.9855 14.5716 13.9855 14.9246 14.2034 15.1447L15.5806 16.5358C15.6874 16.6438 15.8313 16.6978 15.9711 16.6978C16.1109 16.6978 16.2548 16.6438 16.3616 16.5358C16.5795 16.3157 16.5795 15.9627 16.3616 15.7426L14.9886 14.3515Z"
                                            _ngcontent-serverapp-c52=""
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="group hover:bg-white hover:text-question-mark-block hover:border-dashed border-[1px] border-question-mark-block text-white h-[37px] bg-question-mark-block py-[11px] px-[15px] rounded-[30px]  flex items-center justify-center w-[193px] text-[14px] leading-[19px] font-normal"
                            >
                                Стати волонтером
                                <span>
                                    <svg
                                        width="19"
                                        height="15"
                                        viewBox="0 0 19 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[19px] h-[15px] fill-white group-hover:fill-question-mark-block ml-[5px]"
                                    >
                                        <path
                                            d="M9.61554 5.66488C11.2682 5.66488 12.6079 4.39675 12.6079 2.83244C12.6079 1.26813 11.2682 0 9.61554 0C7.96288 0 6.62314 1.26813 6.62314 2.83244C6.62314 4.39675 7.96288 5.66488 9.61554 5.66488Z"
                                            className=" fill-white group-hover:fill-question-mark-block"
                                        />
                                        <path
                                            d="M18.449 2.05922C17.7896 1.52951 16.806 1.60711 16.2488 2.23024L11.8437 7.14357C11.2757 6.59741 10.4897 6.25601 9.61548 6.25601C8.67779 6.25601 7.8466 6.65498 7.27494 7.27431L2.75247 2.22961C2.19239 1.60732 1.20903 1.53035 0.550714 2.05859C-0.106492 2.58725 -0.186917 3.51951 0.371152 4.14201L6.24925 10.6976C6.32255 10.7801 6.40609 10.852 6.49364 10.9157V15H12.7389V10.709C12.7436 10.7046 12.748 10.7018 12.7531 10.6974L18.629 4.1418C19.1864 3.52015 19.1071 2.58788 18.449 2.05922ZM11.7393 9.937C11.7201 9.9933 11.6994 10.0871 11.6644 10.1765C11.6354 10.2676 11.6005 10.3771 11.5593 10.5036C11.5225 10.6261 11.4793 10.7518 11.4341 10.876C11.3899 11.0036 11.3425 11.1409 11.2877 11.2651C11.2329 11.3914 11.1772 11.5306 11.1086 11.6518C10.9789 11.9057 10.8158 12.1482 10.622 12.3776C10.5273 12.4961 10.4177 12.6007 10.3079 12.711C10.1983 12.8186 10.0751 12.9175 9.95144 13.0155C9.82668 13.1094 9.69702 13.2003 9.56112 13.2827C9.42545 13.3628 9.29111 13.44 9.15499 13.5077C9.01932 13.5754 8.8852 13.6349 8.76022 13.6867C8.67512 13.7228 8.59091 13.7532 8.51361 13.7791L8.24025 13.7806C8.25585 13.7365 8.27233 13.691 8.29016 13.6427C8.41068 13.3274 8.59403 12.9118 8.81815 12.5177C8.92976 12.3192 9.05608 12.1294 9.18106 11.9548C9.24812 11.8711 9.31228 11.7904 9.3731 11.7136C9.44016 11.64 9.50409 11.5706 9.56358 11.5072C9.62751 11.4496 9.68521 11.3954 9.73735 11.3484C9.78859 11.2986 9.84294 11.2668 9.88238 11.2345C9.96592 11.1752 10.0136 11.1407 10.0136 11.1407C10.0136 11.1407 9.96369 11.171 9.87636 11.2256C9.83181 11.2547 9.77589 11.2822 9.72108 11.3281C9.66494 11.3728 9.601 11.4211 9.53083 11.4768C9.46533 11.5358 9.39493 11.601 9.32163 11.6693C9.25257 11.744 9.1795 11.8209 9.10509 11.9011C8.96318 12.0685 8.81882 12.2526 8.68916 12.4453C8.42694 12.8306 8.20594 13.2399 8.05445 13.553C8.02549 13.6165 7.99809 13.6749 7.97336 13.7283C7.95687 13.6893 7.93838 13.6452 7.92412 13.5986C7.89204 13.4988 7.85217 13.3761 7.82655 13.2414C7.80048 13.1051 7.78355 12.9577 7.77664 12.799C7.76862 12.4843 7.80716 12.1292 7.92724 11.7815C7.98182 11.6054 8.06292 11.4323 8.15738 11.2634C8.24894 11.0945 8.36902 10.9336 8.49177 10.7784C8.62433 10.6253 8.76891 10.4825 8.92174 10.3512C9.08482 10.2236 9.24812 10.1059 9.42768 10.01C9.61214 9.91697 9.78591 9.83093 9.97684 9.77695C10.1684 9.72191 10.3475 9.67868 10.5238 9.65717C10.7051 9.64283 10.8729 9.64051 11.0195 9.64853C11.1665 9.65422 11.312 9.69618 11.4196 9.72085C11.5263 9.74257 11.6163 9.78285 11.6735 9.80309C11.7301 9.82481 11.7635 9.84211 11.7635 9.84211C11.7635 9.84211 11.7562 9.87479 11.7393 9.937Z"
                                            className=" fill-white group-hover:fill-question-mark-block"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="pt-[42px] pb-[32px] bg-doctor">
                <h3 className="mb-[36px]">мобільний додаток</h3>
                <p className="text-[18px] leading-[25px] text-carbon text-center mb-[28px]">
                    Ви завжди можете користуватися мобільним додатком{' '}
                    <span className="text-clear-chill">FreeTime</span> щоб завжди бути на звязку не
                    знаходячись вдома
                </p>
                <ul className="flex justify-center items-center">
                    <li className="mr-[95px]">
                        <a href="" className="flex items-center">
                            <div className='w-[87px] h-[87px] bg-[url("/images/icons/_app_store_5122x.png")] bg-center bg-no-repeat mr-'></div>
                            <div>
                                <p className="text-[28px] leding-[45px] font-bold">iPhone</p>
                                <span className='text-[12px] leding-[19px] underline text-clear-chill after:content-[""] after:inline-block after:w-[10px] after:h-[11px] after:bg-[url("/images/icons/download.png")] after:ml-[3px]'>
                                    Завантажити
                                </span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center">
                            <div className='w-[87px] h-[87px] bg-[url("/images/icons/google-play.png")] bg-center bg-no-repeat mr-'></div>
                            <div>
                                <p className="text-[28px] leding-[45px] font-bold">Android</p>
                                <span className='text-[12px] leding-[19px] underline text-clear-chill after:content-[""] after:inline-block after:w-[10px] after:h-[11px] after:bg-[url("/images/icons/download.png")] after:ml-[3px]'>
                                    Завантажити
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="pt-[72px] pb-[77px] lg:max-w-[1170px] mx-auto text-[18px] leading-[25px]">
                <h3 className="mb-[39px]">трохи про нас</h3>
                <p className="mb-[28px]">
                    <span className="text-clear-chill">FreeTime</span> - це абсолютно новий і єдиний
                    сервіс по інтернет-маркетингу, який безпосередньо об'єднує власників сайтів і
                    SEO фахівців. Даний проект покликаний полегшити власникам сайтів пошук при
                    підборі потрібного фахівця і суттєво скоротити витрати на просуванні свого
                    бізнесу в Інетрнет. Сервіс SKAFI зібрав не тільки всіх фахівців / фрілансерів
                    але також великі і дрібні компанії, які займаються всілякими послугами з
                    просування бізнесу в інтернеті.
                </p>
                <p className="mb-[32px]">
                    Всі онлайн-оголошення України на
                    <span className="text-clear-chill"> FreeTime </span>- тут ви знайдете те, що
                    шукали! Натиснувши на кнопку{' '}
                    <span className="text-clear-chill"> "Знайти спеціаліста" </span>, ви зможете
                    розмістити оголошення на будь-яку тематику легко і швидко. За допомогою сервісу
                    <span className="text-clear-chill"> FreeTime </span>
                    ви зможете знайти виконавця або роботу з усієї України.Щоб залишити заявку
                    потрібно всього кілька хвилин, і вже протягом дня, у вас буде сотні пропозицій
                    від SEO фахівців і компаній.
                </p>
                <span className='mb-[32px] text-[16px] leading-[22px] font-medium underline text-clear-chill block text-center after:content-[""] after:inline-block after:w-[13px] after:h-[8px] after:bg-[url("/images/icons/up.png")] after:ml-[5px]'>
                    Менше
                </span>
                <div>
                    <ul className="grid grid-cols-3 gap-x-[62px] max-w-[1026px] mx-auto">
                        <li>
                            {' '}
                            <BlogCard
                                title={'Няня на всі руки'}
                                text={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                                }
                                date={'11.07.2018'}
                                img={'150134-OTYSIE-389.png'}
                            />
                        </li>
                        <li>
                            {' '}
                            <BlogCard
                                title={'Персональний тренер'}
                                text={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                                }
                                date={'21.09.2018'}
                                img={'966.png'}
                            />
                        </li>
                        <li>
                            {' '}
                            <BlogCard
                                title={' Заклинило замок?'}
                                text={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                                }
                                date={'06.10.2018'}
                                img={'4056.png'}
                            />
                        </li>
                    </ul>
                </div>
            </section>
            <footer className="bg-shady-character pt-[24px] pb-[33px]">
                <div className="max-w-[1162px] mx-auto ">
                    <div className="flex ">
                        <div className="w-[204px] mr-[30px]">
                            <div className='w-[192px] h-[36px] bg-[url("/images/icons/Logo.svg")] mb-[11px]'></div>
                            <p className="text-white/[0.6] text-[14px] leading-[16px]">
                                Всі онлайн-вакансії та робота України на FreeTime - тут ви знайдете
                                те, що шукали!{' '}
                            </p>
                        </div>

                        <ul
                            role="list"
                            className="marker:text-white/[0.6] list-disc pl-5 space-y-[8px] text-white text-[16px] leading-[23px] w-[232px]  mr-[30px]"
                        >
                            <li>
                                <a href="">Популярные запросы</a>
                            </li>
                            <li>
                                <a href="">Помощь и Обратная связь</a>
                            </li>
                            <li>
                                <a href="">Платные услуги</a>
                            </li>
                            <li>
                                <a href="">Реклама на сайте</a>
                            </li>
                        </ul>

                        <ul
                            role="list"
                            className="marker:text-white/[0.6] list-disc pl-5 space-y-[8px] text-white text-[16px] leading-[23px] w-[273px]  mr-[30px]"
                        >
                            <li>
                                <a href="">Как нанимать и искать работу?</a>
                            </li>
                            <li>
                                <a href="">Правила безопасности</a>
                            </li>
                            <li>
                                <a href="">Условия использования</a>
                            </li>
                            <li>
                                <a href="">Карта регионов</a>
                            </li>
                        </ul>

                        <div className="w-[350px] text-[16px] leading-[23px]  border-red border-solid">
                            <button className="ml-auto text-right mb-[29px] w-[265px] h-[37px] text-[14px] leading-[19px] text-beluga flex justify-center items-center hover:bg-question-mark-block border-question-mark-block border-[1px] border-dashed rounded-[30px]">
                                Для волонтерів
                                <svg
                                    width="19"
                                    height="15"
                                    viewBox="0 0 19 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-[6px]"
                                >
                                    <path
                                        d="M9.61554 5.66488C11.2682 5.66488 12.6079 4.39675 12.6079 2.83244C12.6079 1.26813 11.2682 0 9.61554 0C7.96288 0 6.62314 1.26813 6.62314 2.83244C6.62314 4.39675 7.96288 5.66488 9.61554 5.66488Z"
                                        fill="#F1F1F1"
                                    />
                                    <path
                                        d="M18.449 2.05922C17.7896 1.52951 16.806 1.60711 16.2488 2.23024L11.8437 7.14357C11.2757 6.59741 10.4897 6.25601 9.61548 6.25601C8.67779 6.25601 7.8466 6.65498 7.27494 7.27431L2.75247 2.22961C2.19239 1.60732 1.20903 1.53035 0.550714 2.05859C-0.106492 2.58725 -0.186917 3.51951 0.371152 4.14201L6.24925 10.6976C6.32255 10.7801 6.40609 10.852 6.49364 10.9157V15H12.7389V10.709C12.7436 10.7046 12.748 10.7018 12.7531 10.6974L18.629 4.1418C19.1864 3.52015 19.1071 2.58788 18.449 2.05922ZM11.7393 9.937C11.7201 9.9933 11.6994 10.0871 11.6644 10.1765C11.6354 10.2676 11.6005 10.3771 11.5593 10.5036C11.5225 10.6261 11.4793 10.7518 11.4341 10.876C11.3899 11.0036 11.3425 11.1409 11.2877 11.2651C11.2329 11.3914 11.1772 11.5306 11.1086 11.6518C10.9789 11.9057 10.8158 12.1482 10.622 12.3776C10.5273 12.4961 10.4177 12.6007 10.3079 12.711C10.1983 12.8186 10.0751 12.9175 9.95144 13.0155C9.82668 13.1094 9.69702 13.2003 9.56112 13.2827C9.42545 13.3628 9.29111 13.44 9.15499 13.5077C9.01932 13.5754 8.8852 13.6349 8.76022 13.6867C8.67512 13.7228 8.59091 13.7532 8.51361 13.7791L8.24025 13.7806C8.25585 13.7365 8.27233 13.691 8.29016 13.6427C8.41068 13.3274 8.59403 12.9118 8.81815 12.5177C8.92976 12.3192 9.05608 12.1294 9.18106 11.9548C9.24812 11.8711 9.31228 11.7904 9.3731 11.7136C9.44016 11.64 9.50409 11.5706 9.56358 11.5072C9.62751 11.4496 9.68521 11.3954 9.73735 11.3484C9.78859 11.2986 9.84294 11.2668 9.88238 11.2345C9.96592 11.1752 10.0136 11.1407 10.0136 11.1407C10.0136 11.1407 9.96369 11.171 9.87636 11.2256C9.83181 11.2547 9.77589 11.2822 9.72108 11.3281C9.66494 11.3728 9.601 11.4211 9.53083 11.4768C9.46533 11.5358 9.39493 11.601 9.32163 11.6693C9.25257 11.744 9.1795 11.8209 9.10509 11.9011C8.96318 12.0685 8.81882 12.2526 8.68916 12.4453C8.42694 12.8306 8.20594 13.2399 8.05445 13.553C8.02549 13.6165 7.99809 13.6749 7.97336 13.7283C7.95687 13.6893 7.93838 13.6452 7.92412 13.5986C7.89204 13.4988 7.85217 13.3761 7.82655 13.2414C7.80048 13.1051 7.78355 12.9577 7.77664 12.799C7.76862 12.4843 7.80716 12.1292 7.92724 11.7815C7.98182 11.6054 8.06292 11.4323 8.15738 11.2634C8.24894 11.0945 8.36902 10.9336 8.49177 10.7784C8.62433 10.6253 8.76891 10.4825 8.92174 10.3512C9.08482 10.2236 9.24812 10.1059 9.42768 10.01C9.61214 9.91697 9.78591 9.83093 9.97684 9.77695C10.1684 9.72191 10.3475 9.67868 10.5238 9.65717C10.7051 9.64283 10.8729 9.64051 11.0195 9.64853C11.1665 9.65422 11.312 9.69618 11.4196 9.72085C11.5263 9.74257 11.6163 9.78285 11.6735 9.80309C11.7301 9.82481 11.7635 9.84211 11.7635 9.84211C11.7635 9.84211 11.7562 9.87479 11.7393 9.937Z"
                                        fill="#F1F1F1"
                                    />
                                </svg>
                            </button>
                            <div className="flex text-white/[0.6] ml-auto items-center ">
                                <p className="mr-[14px]">Долучайтесь:</p>
                                <ul className="flex w-full justify-between items-center">
                                    <li className='w-[26px] h-[24px] bg-no-repeat bg-contin bg-center bg-[url("/images/icons/001-google-play.png")]'></li>
                                    <li className='w-[26px] h-[29px] bg-no-repeat bg-contin bg-center bg-[url("/images/icons/002-app-store-apple-symbol.png")]'></li>
                                    <li className='w-[27px] h-[27px] bg-no-repeat bg-contin bg-center bg-[url("/images/icons/facebook-logo-button.png")]'></li>
                                    <li className='w-[27px] h-[27px] bg-no-repeat bg-contin bg-center bg-[url("/images/icons/vk-social-logotype.png")]'></li>
                                    <li className='w-[27px] h-[27px] bg-no-repeat bg-contin bg-center bg-[url("/images/icons/instagram-logo.png")]'></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
