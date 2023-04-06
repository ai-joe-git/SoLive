import NavBar from "../NavBar";
import {useEditor} from "../../editor/contexts/editorContext";

const NAVS = [
  {label: "Deploy", id: "Deploy"},
  {label: "Call", id: "Call"},
  {label: "Console", id: "console"},
];


const Console = () => {
  const {id} = useEditor();

  return (
    <div className="flex-1 bg-primary-700 pt-2 border-t border-r-0 border-solid border-primary-500 rounded-b-[12px]">
      <NavBar navs={NAVS} />
      <div className="h-[180px] w-full text-primary-100">
          <p>测试</p>
      </div>
    </div>
  )
}

export default Console;