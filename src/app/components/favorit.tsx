
interface Props {
  indicator: boolean;
}

export default function Favorite({ indicator }: Props) {
    return indicator ? (
        <div className="group hover:bg-question-mark-block bg-festival w-[30px] h-[30px] rounded-[50%] shadow-[0px_2px_10px_rgba(0,0,0,0.25)] absolute top-[7px] right-[10px] flex justify-center items-center">
            <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" group-hover:stroke-[none] group-hover:fill-white"
            >
                <path
                    d="M7.00003 0.181885L9.10674 4.67064L13.8181 5.39065L10.4089 8.88445L11.2137 13.8182L7.00003 11.489L2.78612 13.8182L3.59088 8.88445L0.181725 5.39065L4.89308 4.67064L7.00003 0.181885Z"
                    fill="white"
                />
            </svg>
        </div>
    ) : (
        <div className="group hover:bg-festival w-[30px] h-[30px] rounded-[50%] shadow-[0px_2px_10px_rgba(0,0,0,0.25)] absolute top-[7px] right-[10px] flex justify-center items-center">
            <svg
                width="14"
                height="14"
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
    );
}
