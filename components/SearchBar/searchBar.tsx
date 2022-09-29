import { Filter } from "./Filter/filter";
import { Input } from "./input";

export default function SearchBar() {
    return (
        <div className="searchBar flex flex-col md:flex-row justify-between self-start mt-[4.8rem] h-[13.6rem] md:h-auto items-center w-full">
            <Input />
            <Filter />
        </div>
    );
}
