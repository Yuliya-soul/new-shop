export enum FileAccess {
  // constant members

  selfDevelopment = 'Книги по саморазвитию',
  fiction = 'Художественная литература',
}
export interface IBook {
  id: number;
  name?: string;
  description?: string;
  price: number;
  category?: FileAccess;
  img?: string;
  isAvailable?: boolean;
  quantity:number;
}
export const book1: IBook = {
  id: 1,
  name: 'Мужчины с Марса, женщины с Венеры. Новая версия для современного мира | Грей Джон',
  description: `Более 25 лет назад психолог Джон Грэй издал книгу, которая перевернула представления об отношениях между мужчиной и женщиной, — "Мужчины с Марса, женщины с Венеры". Эта книга убедительно доказала, что мужчины и женщины мыслят, чувствуют и действуют по-разному. И это была настоящая сенсация! Изучая книгу, сотни тысяч мужчин и женщин по всему миру учились понимать друг друга, становились счастливыми, спасали отношения. Но в XXI веке некоторые советы стали уже не актуальны: мир — изменился! То, что было спасением в прошлом веке, сегодня перестало работать. Но все эти годы Джон Грэй продолжал работу с парами, консультировал, внимательно изучал тенденции нового мира. Поэтому появилась принципиально новая версия знаменитой книги, которая объединяет в себе открытия первой книги и новый современный взгляд на отношения. Как именно изменились мужчины и женщины за последние двадцать лет? Какие действия и слова провоцируют конфликты в современной семье? Как сохранять влечение друг к другу на долгие годы? Об этом и многом другом в новой версии легендарной книги!`,
  price: 14.32,
  category: FileAccess.selfDevelopment,
  img: 'https://cdn1.ozone.ru/s3/multimedia-x/wc1200/6096623277.jpg',
  isAvailable: true,
  quantity:0
};
export const book2: IBook = {
  id: 2,
  name: 'Спаси меня. Книга 1 | Кастен Мона',
  description: `АБСОЛЮТНЫЙ БЕСТСЕЛЛЕР. САМАЯ ПОПУЛЯРНАЯ РОМАНТИЧЕСКАЯ СЕРИЯ В РОССИИ И ГЕРМАНИИ!
  Тираж трилогии Моны Кастен в России перевалил за отметку в 150 000 экземпляров!
  Продажи в Германии только в электронном формате — больше 1 000 000 копий. Бестселлер «Шпигель», топ книжных Европы.
  На российском рынке Мона Кастен появилась всего полтора года назад, но за это короткое время сумела полюбиться тысячам читателей по всей России. Самая фотографируемая книга Инстаграма, любимая серия поклонников сентиментальной прозы.
  Невероятной красоты узнаваемое оформление: тиснение букв на первой сторонке, дизайнерская бумага на переплет (с блестками), цветные форзац и нахзац, плейлист внутри книги.
  Подарите себе и своим близким возможность отдохнуть с прекрасными книгами. Настало время волшебства, и Мона Кастен знает об этом как никто другой.`,
  price: 25.54,
  category: FileAccess.selfDevelopment,
  img: 'https://cdn1.ozone.ru/s3/multimedia-n/wc1200/6280576967.jpg',
  isAvailable: true,
  quantity:0
};
export const book3: IBook = {
  id: 3,
  name: 'Хочу и буду. 6 правил счастливой жизни или Метод Лабковского в действии',
  description: `АВ новом дополненном издании появилось предисловие и глава, где психолог Михаил Лабковский подробно разбирает каждое правило, говорит о нюансах, и объясняет методику, чтобы применять ее стало проще. Чтобы жить стало легче, понятнее, а главное – счастливее.

  Михаил Лабковский абсолютно уверен, что человек может и имеет право быть счастливым и делать только то, что он хочет. Его книга о том, как понять себя, обрести гармонию и научиться радоваться жизни. Автор задается вопросом, почему человек не получает от жизни радость и удовольствие: откуда в нас осознанные и бессознательные тревоги, страхи, неумение слушать себя и строить отношения с другими людьми?
  
  Отличительная черта подхода Лабковского – в конкретике. На любой самый сложный вопрос он всегда дает предельно доходчивый ответ. Его заявления и советы настолько радикальны, что многим приходится сначала испытать удивление, если не шок. В рекомендациях автор не прячется за обтекаемыми формулировками, а четко называет причины проблем. И самое главное, что он знает, как эту проблему решить – без копания в детских психотравмах и пристального анализа вашего прошлого. Если у человека есть знание и желание, то изменить себя и свою жизнь к лучшему вполне реально. Цель издания этой книги – личное счастье каждого, кто ее прочитает.`,
  price: 22.9,
  category: FileAccess.selfDevelopment,
  img: 'https://s5-goods.ozstatic.by/2000/848/60/101/101060848_0.jpg',
  isAvailable: true,
  quantity:0
};
