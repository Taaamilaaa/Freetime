import Favorite from './favorit';
import Button from './button';

interface Props {
    title: string;
    text: string;
    type: string;
    price: string;
    favoriteIndicator: boolean;
}

export default function JobApplicationCard({ type, title, text, price, favoriteIndicator }: Props) {
    return (
        <div className="pt-[15px] pb-[25px] px-[15px] rounded-[8px] shadow-[0px_2px_12px_rgba(0,0,0,0.15)] relative">
            <Favorite indicator={favoriteIndicator} />

            <span className='block text-elemental-grey text-[14px] leading-[16px] font-normal mb-[23px] flex after:content-[""] after:inline-block after:w-[13px] after:h-[15px] after:bg-[url("/images/icons/lamp_1.svg")] after:bg-cover after:ml-[5px]'>
                {type}
            </span>
            <h5 className="text-[18px] leading-[29px] mb-[19px]">{title}</h5>
            <p className="text-[14px] leding-[16px] font-normal mb-[21px]">{text}</p>
            <div className="flex justify-between items-center">
                <span className="text-island-green font-bold leding-[26px] text-16px">{price}</span>
                <Button />
            </div>
        </div>
    );
}
