interface ITypograhy {
    fontFamily: string;
    fontWeight: number;
    lineHeight: number;
    htmlFontSize: number;
}

interface IPalette {
    primary: {
        main: string;
    };
}

export interface ITheme {
    typography: ITypograhy;
    palette: IPalette;
}
