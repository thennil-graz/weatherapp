export interface LocationAPIResponse {
    Key: string,
    Country: LocationInfo,
    AdministrativeArea: LocationInfo,
}

export interface LocationInfo {
    ID: string,
    LocalizedName: string
}

export interface ForecastAPIResponse {
    DailyForecasts: ForecastInfo[]
}

export interface ForecastInfo {
    Date: Date,
    EpochDate: number,
    Temperature: {
        Minimum: Metric,
        Maximum: Metric
    },
    Day: DailyInfo,
    Night: DailyInfo
}

interface DailyInfo {
    Icon: number
    IconPhrase: string
    HasPrecipitation: boolean
    PrecipitationType: string
    PrecipitationIntensity: string
    ShortPhrase: string
    LongPhrase: string
}

interface Metric {
    Value: number,
    Unit: string,
    UnitType: number
}