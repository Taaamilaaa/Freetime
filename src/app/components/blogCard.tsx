import Button from './button';

interface Props {
    title: string;
    text: string;
    date: string;
    img: string;
}

export default function BlogCard({ title, text, date, img }: Props) {
    return (
        <div className="relative shadow-[0px_2px_12px_rgba(0,0,0,0.15)] rounded-[8px]">
            <div className="group hover:bg-festival bg-white w-[44px] h-[44px] rounded-[50%] shadow-[0px_2px_10px_rgba(0,0,0,0.25)] absolute top-[15px] right-[8px] flex justify-center items-center">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-elemental-grey group-hover:stroke-[none] group-hover:fill-white"
                >
                    <path
                        d="M7.00003 0.181885L9.10674 4.67064L13.8181 5.39065L10.4089 8.88445L11.2137 13.8182L7.00003 11.489L2.78612 13.8182L3.59088 8.88445L0.181725 5.39065L4.89308 4.67064L7.00003 0.181885Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div>
                <div
                    className={`h-[202px] bg-[url("/images/${img}")]  bg-no-repeat bg-cover  rounded-t-[8px]`}
                ></div>
                <div className="p-[20px]">
                    <h5 className="text-[18px] leading-[29px] text-shady-character mb-[27px]">
                        {title}
                    </h5>
                    <p className="mb-[27px]">{text}</p>
                    <div className="text-elemental-grey flex justify-between items-center">
                        <p>
                            <span className="text-[10px] leading-[11px] underline mr-[10px]">
                                Статті{' '}
                            </span>
                            <span className='text-[10px] leading-[11px] before:content-[""] before:inline-block before:w-[8px] before:h-[8px] before:mr-[2px] before:bg-[url("/images/icons/calendar-with-spring-binder-and-date-blocks.png")]'>
                                {date}
                            </span>
                        </p>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    );
}
