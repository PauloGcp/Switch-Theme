//se nao importar antes de sobrescrever o modulo, ele ira sobrescrever o módulo por completo,
//fazendo perder elementos essenciais para o funcionamento da aplicação
import 'styled-components'
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secundary: string;
            background:string;
            text: string;
        }
    }
}