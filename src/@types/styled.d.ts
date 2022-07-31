import styled from "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

// criando tipagem para o módulo styled components
// sempre que for importado styled components, a definição de tipos que ele irá puxar,
// será a for definida aqui.

// se não estivesse importado o styled components, você estaria criando uma nova tipagem
// para o módulo. A ideia aqui será sobrescrever.
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
