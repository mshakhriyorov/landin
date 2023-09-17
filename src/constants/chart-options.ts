import { Icons } from "../assets/images/icons"

export const options = {
    responsive: true,
    maintainAspectRatio: false
}

export const chart_items = [
    {
        id: 0,
        icon: Icons.InboxSvg,
        percent: 80,
        text: 'Принято'
    },
    {
        id: 1,
        icon:Icons.HandSvg,
        percent: 10,
        text: 'Отказано'
    },
    {
        id: 2,
        icon: Icons.HourGlassSvg,
        percent: 10,
        text: 'На рассмотрении'
    },
]