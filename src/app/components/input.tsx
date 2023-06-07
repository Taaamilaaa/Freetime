interface Props {
  placeholder: string;
}

export default function Input({ placeholder }:Props) {
    return (
                   <input
                type="text"
                placeholder={placeholder}
                className="h-[45px] rounded-[30px] py-[15px] px-[20px] border-[1px] border-solid border-clear-chill  placeholder:text[16px] placeholder:text-explosive-grey placeholder:leading-[22px]"
            />
    );
}