export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc:         string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    translations:  translations ;
    latlng:       number[];
    landlocked:   boolean;
    borders:      string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini:         Gini;
    fifa:         string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  string;
    capitalInfo:  CapitalInfo;
    postalCode:   PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  string;
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

export interface Currencies {
    ARS: Ars;
}

export interface Ars {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Gini {
    "2019": number;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    grn: string;
    spa: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    grn: translations;
    spa: translations;
}

export interface translations {
    ara: TranslationType;
ces:TranslationType;
cym:TranslationType;
deu:TranslationType;
est:TranslationType;
fin:TranslationType;
fra:TranslationType;
hrv:TranslationType;
hun:TranslationType;
ita:TranslationType;
jpn:TranslationType;
kor:TranslationType;
nld:TranslationType;
per:TranslationType;
pol:TranslationType;
por:TranslationType;
rus:TranslationType;
slk:TranslationType;
spa:TranslationType;
swe:TranslationType;
urd:TranslationType;
zho:TranslationType;

}
export interface TranslationType {
    official: string;
    common: string;
 
}


export interface PostalCode {
    format: string;
    regex:  string;
}
