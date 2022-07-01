import { createRoot } from "react-dom/client";
import { Presentation } from "./Presentation";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<Presentation />);
