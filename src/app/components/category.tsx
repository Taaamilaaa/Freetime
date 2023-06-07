
interface Props {
  title: string;
  urlString: string;
}

export default function Category({ title, urlString }: Props) {
 
    return (
        <li>
            <div className="h-[60px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-[14px] px-[23px] rounded-[50px]">
                <span
                    className={`flex items-center before:content[""] before:inline-block before:bg-[url("/images/categoriesIcons/${urlString}")] before:w-[30px] before:h-[30px]  before:bg-no-repeat before:bg-center before:mr-[20px]`}
                >
                    {title}
                </span>
            </div>
        </li>
    );
}
