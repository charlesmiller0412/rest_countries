import { Filter } from "./Filter/filter";
import { Input } from "./input";

export default function SearchBar() {
    return (
        <div className="searchBar flex flex-col h-[13.6rem] md:h-auto md:flex-row w-full justify-between mb-[3.2rem] md:my-[4.8rem] items-center">
            <Input />
            <Filter />
        </div>
    );
}
