export const weatherDetailsData = [
  {
    icon: 'humidity',
    title: 'Влажность',
    value: '75 %',
    text: null,
    initial_value: '0%',
    final_value: '100%',
  },
  {
    icon: 'pressure',
    title: 'Давление',
    value: 761,
    text: 'Повышенное',
    initial_value: null,
    final_value: null,
  },
  {
    icon: 'visibility',
    title: 'Видимость',
    value: '28 км',
    text: 'Нормальная',
    initial_value: null,
    final_value: null,
  },
  {
    icon: 'sunrise',
    title: 'Рассвет',
    value: '8:42',
    text: 'Прошло: 02:47',
    initial_value: null,
    final_value: null,
  },
  {
    icon: 'sunset',
    title: 'Закат',
    value: '16:37',
    text: 'Осталось: 05:08',
    initial_value: null,
    final_value: null,
  },
  {
    icon: 'wind',
    title: 'Сила ветра',
    value: '2 м/с',
    text: 'Северо-западный',
    initial_value: null,
    final_value: null,
  },
];

export const forecast24h = [
  { time: '12:00', icon: '04d', temp: '-7°' },
  { time: '15:00', icon: '04d', temp: '-5°' },
  { time: '18:00', icon: '04d', temp: '-7°' },
  { time: '21:00', icon: '04n', temp: '-9°' },
  { time: '00:00', icon: '04n', temp: '-11°' },
  { time: '03:00', icon: '04n', temp: '-13°' },
];

export const forecast5d = [
  { time: 'Вс, 07 янв.', icon: '02d', temp: 'от -17° до -11°' },
  { time: 'Пн, 08 янв.', icon: '02d', temp: 'от -16° до -8°' },
  { time: 'Вт, 09 янв.', icon: '04d', temp: 'от -8° до -2°' },
  { time: 'Ср, 10 янв.', icon: '04d', temp: 'от -9° до -14°' },
];
