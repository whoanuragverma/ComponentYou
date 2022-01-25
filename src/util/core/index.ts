import { Theme } from "../../../globals";
import themeEnine from "./core";

type core = (url: string) => Promise<Theme>;

export default themeEnine as core;
