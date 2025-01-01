import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput() {
  return (
    <div className="max-w-[80rem] mx-auto flex justify-end my-4 py-2 font-noto-thai">
        <FontAwesomeIcon className="border border-r-0 p-3.5 pl-5 relative right-0 rounded-l-full" icon={faMagnifyingGlass} aria-hidden="true" />
        <input className="py-2 pl-2 pr-6 w-3/12 hover:w-5/12 focus:w-5/12 border rounded-r-full transition-all transform ease-in-out duration-200" type="text" placeholder="ค้นหา" aria-label="Search" />
    </div>
  )
}
