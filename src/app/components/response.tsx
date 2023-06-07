interface Props {
    title: string;
    text: string;
    date: string;
}

export default function Response({ title, date, text }: Props) {
    return (
        <div className="max-w-[512px] ">
            <h4 className="mb-[11px] text-[24px] leading-[34px]">{title}</h4>
            <span className="text-[12px] leading-[17px]">
                {date}
                <span className='inline-block w-[76px] h-[12px] bg-[url("/images/icons/stars.svg")] bg-no-repeat bg-center ml-[5px]'></span>{' '}
            </span>
            <p className="text-[14px] leading-[20px]">
                {text}
            </p>
        </div>
    );
}
