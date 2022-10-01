import { Component } from 'react';
declare type MarkedDates = {
    [key: string]: object;
};
interface Props {
    weekView?: boolean;
}
export default class ExpandableCalendarScreen extends Component<Props> {
    marked: MarkedDates;
    theme: {
        arrowColor: string;
        arrowStyle: {
            padding: number;
        };
        expandableKnobColor: string;
        monthTextColor: string;
        textMonthFontSize: number;
        textMonthFontFamily: string;
        textMonthFontWeight: "bold";
        textSectionTitleColor: string;
        textDayHeaderFontSize: number;
        textDayHeaderFontFamily: string;
        textDayHeaderFontWeight: "normal";
        dayTextColor: string;
        textDayFontSize: number;
        textDayFontFamily: string;
        textDayFontWeight: "500";
        textDayStyle: {
            marginTop: number;
        };
        selectedDayBackgroundColor: string;
        selectedDayTextColor: string;
        textDisabledColor: string;
        dotColor: string;
        selectedDotColor: string;
        disabledDotColor: string;
        dotStyle: {
            marginTop: number;
        };
    };
    todayBtnTheme: {
        todayButtonTextColor: string;
    };
    onDateChanged: () => void;
    onMonthChange: () => void;
    renderItem: ({ item }: any) => JSX.Element;
    render(): JSX.Element;
}
export {};
