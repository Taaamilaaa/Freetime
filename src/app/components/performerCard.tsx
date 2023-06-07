import Favorite from './favorit';
import Button from './button';

interface Props {
    title: string;
    text: string;
    type: string;
    price: string;
    favoriteIndicator: boolean;
    name: string;
    nickname: string;
    img: string;
}

export default function PerformerCard({
    type,
    title,
    text,
    price,
    favoriteIndicator,
    name,
    nickname,
    img,
}: Props) {
    return (
        <div className="p-[15px] rounded-[8px] shadow-[0px_2px_12px_rgba(0,0,0,0.15)] relative h-full flex flex-col justify-between">
            <div>
                <Favorite indicator={favoriteIndicator} />
                {type === 'Виконавці' ? (
                    <span className='underline block text-elemental-grey text-[14px] leading-[16px] font-normal mb-[16px] after:content-[""] after:inline-block after:w-[10px] after:h-[10px] after:bg-[url("/images/icons/Group.svg")] after:ml-[5px]'>
                        {type}
                    </span>
                ) : (
                    <span className='underline block text-question-mark-block text-[14px] leading-[16px] font-normal mb-[16px] after:content-[""] after:inline-block after:w-[10px] after:h-[10px] after:bg-[url("/images/icons/eco-volunteer.png")] after:ml-[5px]'>
                        {type}
                    </span>
                )}

                <div className="flex flex-row items-center ">
                    <div
                        className={`w-[73px] h-[73px] mr-[10px] rounded-[50%] bg-[url("/images/${img}")] border-[1px] border-solid border-explosive-grey bg-no-repeat bg-center`}
                    ></div>
                    <div className="font-medium text-[18px] leading-[29px]">
                        <p>{name}</p>
                        <p>{nickname}</p>
                    </div>
                </div>
                <h5 className="text-[18px] leading-[29px] mb-[34px]">{title}</h5>
                <p className="text-[14px] leding-[16px] font-normal mb-[16px]">{text}</p>
            </div>

            <div className="flex justify-between items-center mt-auto">
                <span className="text-island-green font-bold leding-[26px] text-16px">{price}</span>
                <Button />
            </div>
        </div>
    );
}
