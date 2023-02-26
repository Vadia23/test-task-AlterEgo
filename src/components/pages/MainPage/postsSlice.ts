import { createSlice } from "@reduxjs/toolkit";

import { IPostsState } from "../../../types";

const initialState: IPostsState = {
  mainFeaturedPost: {
    title: "УКРАЇНА НЕЗВІДАНА - ГАРНІ МІСЦЯ, ЯКІ ОБОВ'ЯЗКОВО ВАРТО ПОБАЧИТИ",
    description:
      "Збираючись у відпустку, ми хочемо провести його цікаво. І якщо для одних досить просто залишитися вдома і нарешті просто виспатися, для інших - це привід помандрувати, і відкрити для себе щось нове.",
    image: "https://anga.ua/ifiles/files/slideNeveroyatnayaUAUkr-1.png",
    imageText: "main image description",
  },
  featuredPosts: [
    {
      title: "ПЛОЩА РИНОК У ЛЬВОВІ",
      date: "Nov 12",
      description:
        "Екскурсії по Львову здатні затягнути вас надовго, адже місто Лева настільки багате на різні пам'ятки та цікаві місця, що, напевно, не вистачить навіть місяця, щоб все подивитися.",
      image: "https://anga.ua/ifiles/files/slideNeveroyatnayaUAUkr-2.png",
      imageLabel: "Image Text",
    },
    {
      title: "МУКАЧІВСЬКИЙ ЗАМОК ПАЛАНОК",
      date: "Nov 11",
      description:
        "Одне з перших місць, яке необхідно побачити під час екскурсії в Мукачево - знаменита фортеця, яка гордо височіє над містом.",
      image: "https://anga.ua/ifiles/files/slideNeveroyatnayaUAUkr-3.png",
      imageLabel: "Image Text",
    },
    {
      title: "ТУНЕЛЬ ЛЮБОВІ",
      date: "Nov 13",
      description:
        "Автобусні тури по Україні просто неможливі без поїздки до Рівного. Справжні романтики обов'язково повинні побачити тут одне з найпрекрасніших місць - знаменитий Тунель Любові.",
      image: "https://anga.ua/ifiles/files/slideNeveroyatnayaUAUkr-4.png",
      imageLabel: "Image Text",
    },
    {
      title: "ОЗЕРО СИНЕВИР",
      date: "Nov 14",
      description:
        "Справжня родзинка Карпат, і, безумовно, найкрасивіше озеро у всій країні, Синевир вартий того, щоб відправитися в тури вихідного дня з Києва по Україні, і поїхати саме сюди - в один з найкрасивіших регіонів Закарпаття - Міжгірщину.",
      image: "https://anga.ua/ifiles/files/slideNeveroyatnayaUAUkr-5.png",
      imageLabel: "Image Text",
    },
    {
      title: "ЛУЦЬКИЙ ЗАМОК",
      date: "Nov 15",
      description:
        "Замок Любарта, або Луцький замок - це унікальний архітектурний пам'ятник, який входить в ТОП-7 чудес України. Тур в Луцьк.",
      image: "https://anga.ua/ifiles/files/slideNeveroyatnayaUAUkr-6.png",
      imageLabel: "Image Text",
    },
    {
      title: "БІЛГОРОД ДНІСТРОВСЬКА ФОРТЕЦЯ",
      date: "Nov 16",
      description:
        "Одноденні тури по Україні з Києва - це можливість відвідати фортецю Аккерман, або Білгород Дністровську фортецю - найбільшу, і одночасно з цим - найкраще збережену фортецю у всій країні.",
      image: "https://anga.ua/ifiles/files/slideNeveroyatnayaUAUkr-7.png",
      imageLabel: "Image Text",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

const { reducer } = postsSlice;

export default reducer;
