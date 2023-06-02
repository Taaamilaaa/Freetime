import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <section className='h-fit w-full bg-[url("/images/plumber-228010_1920.jpg")] bg-cover bg-no-repeat bg-center '>
                <div className="lg:max-w-[1170px] mx-auto text-center">
                    <div className="items-center mb-[20px]">
                        {' '}
                        <div>
                            <button className='w-[60px] h-[62px] bg-[url("/images/main-sl-left.png")] bg-no-repeat bg-contain absolute left-[60px] top-[215px]'></button>
                            <h1 className="text-[62px] leading-[100px] text-white uppercase  pt-[215px] pb-[150px]">
                                Потрібна допомога?
                            </h1>{' '}
                            <button className='w-[60px] h-[62px] bg-[url("/images/main-sl-left.png")] bg-no-repeat bg-contain rotate-[180deg] absolute right-[60px] top-[215px]'></button>
                            {/* <p className="text-[21px]  leading-[39px] mb-[16px] ">
                                Знайдіть потрібного виконавця для вашого завдання!
                            </p>
                            <button className="text-[18px] bg-clear-chill py-[6px] px-[10px] rounded-[30px] mx-auto flex items-center justify-center w-[250px] ">
                                Стати виконавцем
                                <span className=" inline-block w-[18px] h-[20px] ml-[10px] ">
                                    <img src="/images/icons/lamp.svg" alt="" />
                                </span>
                            </button> */}
                        </div>
                    </div>
                </div>
                <div className=" bg-shady-character/[0.6] w-full py-[16px]">
                    <div className="max-w-[1026px] mx-auto  px-[30px] ">
                        <h3 className="text-[34px] leading-[55px] text-white font-normal mb-[16px] text-center">
                            Знайдіть виконавця або волонтера за кілька кліків
                        </h3>
                        <form
                            action=""
                            className="grid grid-cols-[2fr_2fr_1fr] gap-x-[10px] mb-[18px]"
                        >
                            <input
                                type="text"
                                placeholder="Що потрібно зробити?"
                                className="h-[45px] rounded-[30px] py-[15px] px-[20px] border-[1px] border-solid border-clear-chill  placeholder:text[16px] placeholder:text-explosive-grey placeholder:leading-[22px]"
                            />
                            <input
                                type="text"
                                autoComplete="off"
                                placeholder="Виберіть місто"
                                className="h-[45px] rounded-[30px] py-[15px] px-[20px] border-[1px] border-solid border-clear-chill  placeholder:text[16px] placeholder:text-explosive-grey placeholder:leading-[22px]"
                            />

                            <button
                                type="submit"
                                className="text-white h-[45px] bg-clear-chill py-[6px] px-[10px] rounded-[30px] mx-auto flex items-center justify-center w-[194px] text-[18px] leading-[25px]"
                            >
                                Пошук{' '}
                                <span className="inline-block w-[18px] h-[18px] ml-[10px]">
                                    <img src="/images/icons/serch.svg" alt="" />
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
                                <span className='underline text-[16px] font-medium leading-[22px] text-clear-chill before:content[""] before:block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/7ef98727b9.png")]  before:bg-no-repeat before:bg-center before:mx-auto before:mb-[21px]'>
                                    Будівельні роботи
                                </span>
                            </li>
                            <li className="text-center mb-[20px]">
                                <span className='underline text-[16px] font-medium leading-[22px] text-clear-chill before:content[""] before:block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/36b612e85a.png")]  before:bg-no-repeat before:bg-center before:mx-auto before:mb-[21px]'>
                                    Побутові послуги
                                </span>
                            </li>
                            <li className="text-center  mb-[20px]">
                                <span className='underline text-[16px] font-medium leading-[22px] text-clear-chill before:content[""] before:block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/413b741e2f.png")]  before:bg-no-repeat before:bg-center before:mx-auto before:mb-[21px]'>
                                    IT послуги та Фріланс
                                </span>
                            </li>
                            <li className="text-center mb-[20px]">
                                <span className='underline text-[16px] font-medium leading-[22px] text-clear-chill before:content[""] before:block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/5451857ad5.png")]  before:bg-no-repeat before:bg-center before:mx-auto before:mb-[21px]'>
                                    Репетитори
                                </span>
                            </li>
                            <li className="text-center mb-[20px]">
                                <span className='underline text-[16px] font-medium leading-[22px] text-clear-chill  before:content[""] before:block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/73ec110797b.png")]  before:bg-no-repeat before:bg-center before:mx-auto before:mb-[21px]'>
                                    Кур'єрські послуги
                                </span>
                            </li>
                        </ul>
                        <button className='w-[31px] h-[32px] bg-[url("/images/icons/double-angle-pointing-to-right.png")] rotate-[180deg]'></button>
                    </div>

                    <ul className="grid grid-cols-3 gap-x-[55px] gap-y-[52px]  text-[18px] leading-[25px] font-medium">
                        <li>
                            <div className="h-[60px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-[14px]  px-[23px] rounded-[50px]">
                                <span className='flex items-center before:content[""] before:inline-block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/018-handyman-tools.png")]  before:bg-no-repeat before:bg-center before:mr-[20px]'>
                                    Домашній майстер
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="h-[60px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-[14px]  px-[23px] rounded-[50px]">
                                <span className='flex items-center before:content[""] before:inline-block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/017-paintbrush.png")]  before:bg-no-repeat before:bg-center before:mr-[20px]'>
                                    Оздоблювальні роботи
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="h-[60px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-[14px]  px-[23px] rounded-[50px]">
                                <span className='flex items-center before:content[""] before:inline-block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/014-vacuum.png")]  before:bg-no-repeat before:bg-center before:mr-[20px]'>
                                    Клінінгові послуги
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="h-[60px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-[14px]  px-[23px] rounded-[50px]">
                                <span className='flex items-center before:content[""] before:inline-block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/73ec110797b.png")]  before:bg-no-repeat before:bg-center before:mr-[20px]'>
                                    Кур'єрські послуги
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="h-[60px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-[14px]  px-[23px] rounded-[50px]">
                                <span className='flex items-center before:content[""] before:inline-block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/015-washing-machine.png")]  before:bg-no-repeat before:bg-center before:mr-[20px]'>
                                    Ремонт техніки
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="h-[60px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-[14px]  px-[23px] rounded-[50px]">
                                <span className='flex items-center before:content[""] before:inline-block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/013-delivery-packages-on-a-trolley.png")]  before:bg-no-repeat before:bg-center before:mr-[20px]'>
                                    Логістичні послуги
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="h-[60px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-[14px]  px-[23px] rounded-[50px]">
                                <span className='flex items-center before:content[""] before:inline-block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/006-car-repair.png")]  before:bg-no-repeat before:bg-center before:mr-[20px]'>
                                    Ремонт авто
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="h-[60px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-[14px]  px-[23px] rounded-[50px]">
                                <span className='flex items-center before:content[""] before:inline-block before:w-[30px] before:h-[30px] before:bg-[url("/images/icons/413b741e2f.png")]  before:bg-no-repeat before:bg-center before:mr-[20px]'>
                                    Робота в Інтернеті
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="bg-white-smoke pt-[60px] pb-[72px]">
                <div className="max-w-[1026px] mx-auto  ">
                    <h3 className="text-[28px] leading-[45px]  uppercase text-center mb-[48px]">
                        Ваш час - за гроші
                    </h3>
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
                            <button className="text-[14px] font-normal bg-clear-chill py-[11px] px-[23px] rounded-[30px] flex items-center justify-center text-white">
                                Стати виконавцем або волонтером
                                <span className=" inline-block w-[18px] h-[20px] ml-[10px] ">
                                    <img src="/images/icons/lamp.svg" alt="" />
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
                <h3 className="text-[28px] leading-[45px]  uppercase text-center mb-[48px]">
                    останні заявки
                </h3>
                <div className=" max-w-[1162px] mx-auto flex flex-row justify-between items-center">
                    <button className='w-[31px] h-[32px] bg-[url("/images/icons/double-angle-pointing-to-right.png")] '></button>
                    <ul className="grid grid-cols-3  gap-x-[62px] max-w-[1026px] mx-auto ">
                        <li>
                            <div className="pt-[15px] pb-[25px] px-[15px] rounded-[8px] shadow-[0px_2px_12px_rgba(0,0,0,0.15)] ">
                                <span className=' text-elemental-grey text-[14px] leading-[16px] font-normal mb-[23px] after:content-[""] after:inline-block after:w-[10px] after:h-[10px] after:bg-[url("/images/icons/Group.svg")] after:ml-[5px]'>
                                    Заявка на роботу
                                </span>
                                <h5 className="text-[18px] leading-[29px] mb-[19px]">
                                    Потрібен маляр
                                </h5>
                                <p className="text-[14px] leding-[16px] font-normal mb-[21px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor{' '}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-island-green font-bold leding-[26px] text-16px">
                                        400 грн
                                    </span>
                                    <button className="text-[12px] text-center font-normal bg-clear-chill py-[5px] px-[20px] rounded-[30px] flex items-center justify-center text-white">
                                        Детальніше
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="pt-[15px] pb-[25px] px-[15px] rounded-[8px] shadow-[0px_2px_12px_rgba(0,0,0,0.15)]">
                                <span className=' text-elemental-grey text-[14px] leading-[16px] font-normal mb-[23px] after:content-[""] after:inline-block after:w-[10px] after:h-[10px] after:bg-[url("/images/icons/Group.svg")] after:ml-[5px]'>
                                    Заявка на роботу
                                </span>
                                <h5 className="text-[18px] leading-[29px] mb-[19px]">
                                    Потрібен маляр
                                </h5>
                                <p className="text-[14px] leding-[16px] font-normal mb-[21px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor{' '}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-island-green font-bold leding-[26px] text-16px">
                                        400 грн
                                    </span>
                                    <button className="text-[12px] text-center font-normal bg-clear-chill py-[5px] px-[20px] rounded-[30px] flex items-center justify-center text-white">
                                        Детальніше
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="pt-[15px] pb-[25px] px-[15px] rounded-[8px] shadow-[0px_2px_12px_rgba(0,0,0,0.15)]">
                                <span className=' text-elemental-grey text-[14px] leading-[16px] font-normal mb-[23px] after:content-[""] after:inline-block after:w-[10px] after:h-[10px] after:bg-[url("/images/icons/Group.svg")] after:ml-[5px]'>
                                    Заявка на роботу
                                </span>
                                <h5 className="text-[18px] leading-[29px] mb-[19px]">
                                    Потрібен маляр
                                </h5>
                                <p className="text-[14px] leding-[16px] font-normal mb-[21px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor{' '}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-island-green font-bold leding-[26px] text-16px">
                                        400 грн
                                    </span>
                                    <button className="text-[12px] text-center font-normal bg-clear-chill py-[5px] px-[20px] rounded-[30px] flex items-center justify-center text-white">
                                        Детальніше
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button className='w-[31px] h-[32px] bg-[url("/images/icons/double-angle-pointing-to-right.png")] rotate-[180deg]'></button>
                </div>
            </section>
            <section className="pt-[72px] pb-[79px] bg-white-smoke">
                <h3 className="text-[28px] leading-[45px]  uppercase text-center mb-[42px]">
                    зараз на сайті
                </h3>
                <ul className="grid grid-cols-3 max-w-[1026px] mx-auto ">
                    <li className="text-center font-bold uppercase ">
                        <span className="flex flex-row items-center justify-center mb-[25px] text-[28px] leading-[45px] text-aqua-belt before:content-[''] before:inline-block before:w-[37px] before:h-[37px] before:bg-[url('/images/icons/001-idea.png')] before:bg-no-repeat before:bg-contin before:bg-center before:mr-[6px]">6548</span>
                        <p className="text-[18px] leading-[29px] ">
                            {' '}
                            професіоналів та волонтерів
                        </p>
                    </li>
                    <li className="text-center  font-bold uppercase">
                        <span className="flex flex-row items-center justify-center mb-[25px] text-[28px] leading-[45px] text-pink-charge before:content-[''] before:inline-block before:w-[37px] before:h-[37px] before:bg-[url('/images/icons/003-computer.png')] before:bg-no-repeat before:bg-contin before:bg-center before:mr-[6px]">4684</span>
                        <p className="text-[18px] leading-[29px] ">
                            {' '}
                            вакансій та пропозицій
                        </p>
                    </li>
                    <li className="text-center  font-bold uppercase">
                        <span className="flex flex-row items-center justify-center mb-[25px] text-[28px] leading-[45px] text-herty-hosta before:content-[''] before:inline-block before:w-[37px] before:h-[37px] before:bg-[url('/images/icons/004-stamp.png')] before:bg-no-repeat before:bg-contin before:bg-center before:mr-[6px]">7642</span>
                        <p className="text-[18px] leading-[29px]  ">
                            {' '}
                            виконаних робіт та проектів
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    );
}
