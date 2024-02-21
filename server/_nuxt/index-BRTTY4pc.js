import { defineComponent, mergeProps, useSSRContext, inject, unref, ref, reactive, provide, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import axios from "axios";
import "@formkit/auto-animate";
const _imports_0 = "" + __publicAssetsURL("Menu.png");
const _imports_1 = "" + __publicAssetsURL("water.png");
const _imports_2 = "" + __publicAssetsURL("windy.png");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TodayWeather",
  __ssrInlineRender: true,
  props: {
    city: {},
    deg: {},
    condition: {},
    humidity: {},
    wind: {},
    date: {}
  },
  emits: ["delete-request"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full min-h-[420px]" }, _attrs))}><div class="justify-center gap-1 sm:flex hidden h-full m-auto">`);
      ssrRenderSlot(_ctx.$slots, "cards", {}, null, _push, _parent);
      _push(`</div><div class="bg-black bg-opacity-30 rounded-3xl h-80 max-w-[312px] w-full min-h-full text-white mt-1"><div class="py-7 px-5 flex flex-col h-full relative"><div class="dropdown absolute cursor-pointer left-2 top-3 h-4 w-6"><div tabindex="0" role="button" class="m-1"><img class="select-none"${ssrRenderAttr("src", _imports_0)} alt="menu"></div><ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52 bg-opacity-95"><li class="rounded transition hover:bg-black bg-opacity-80 pl-2 active:bg-black active:opacity-60"> Delete </li></ul></div><div class="flex justify-around"><div class="select-none max-h-14">`);
      ssrRenderSlot(_ctx.$slots, "weather-icon", {}, null, _push, _parent);
      _push(`</div><div><div class="font-medium text-lg">${ssrInterpolate(_ctx.city)}</div><div class="text-sm">${ssrInterpolate(_ctx.date)}</div></div></div><div class="flex items-center flex-col flex-auto justify-center"><div class="text-7xl">${ssrInterpolate(_ctx.deg)}°</div><div class="text-sm">${ssrInterpolate(_ctx.condition)}</div></div><div class="flex justify-between flex-wrap text-xs"><div class="flex"><img class="select-none pr-1"${ssrRenderAttr("src", _imports_1)} alt="water"><div class="mr-1 flex items-center">Humidity</div><div class="flex items-center">${ssrInterpolate(_ctx.humidity)}%</div></div><div class="flex"><img class="select-none pr-1"${ssrRenderAttr("src", _imports_2)} alt="wind"><div class="mr-1 flex items-center">Wind</div><div class="flex items-center">${ssrInterpolate(_ctx.wind)}m/s</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TodayWeather.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LaterWeather",
  __ssrInlineRender: true,
  props: {
    deg: {},
    condition: {},
    humidity: {},
    wind: {},
    date: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black bg-opacity-30 rounded-2xl min-h-full min-w-full w-9" }, _attrs))}><div class="h-full p-1 text-xs flex flex-col items-center text-white justify-between"><div class="grow">${ssrInterpolate(_ctx.date)}</div><div class="grow">${ssrInterpolate(_ctx.deg)}°</div><div class="text-center grow">${ssrInterpolate(_ctx.condition)}</div><div class="flex gap-3 grow"><div>${ssrInterpolate(_ctx.humidity)}%</div><div>${ssrInterpolate(_ctx.wind)}m/s</div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LaterWeather.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BaseInput",
  __ssrInlineRender: true,
  emits: ["click-request"],
  setup(__props, { emit: __emit }) {
    const city = inject("city");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><input${ssrRenderAttr("value", unref(city).message)} class="text-black relative rounded transition bg-transparent border-2 border-slate-700 focus:outline-none focus:bg-opacity-15 focus:bg-slate-200 py-1 px-2 placeholder:text-black" type="text" placeholder="Enter your city"></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  emits: ["click-request"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "text-black cursor-pointer font-medium border-2 rounded transition border-slate-700 px-2 hover:bg-slate-200 hover:bg-opacity-15 active:bg-slate-200 active:bg-opacity-25 disabled:bg-opacity-0 disabled:cursor-default" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let info = null;
    let id = 0;
    const weatherIcons = {
      "01d": "/weather/clear-sky.png",
      // ясное небо (день)
      "01n": "/weather/clear-sky.png",
      // ясное небо (ночь)
      "02d": "/weather/few-clouds.png",
      // небольшая облачность (день)
      "02n": "/weather/few-clouds.png",
      // небольшая облачность (ночь)
      "03d": "/weather/few-clouds.png",
      // рассеянные облака (день)
      "03n": "/weather/few-clouds.png",
      // рассеянные облака (ночь)
      "04d": "/weather/broken-clouds.png",
      // облачно (день)
      "04n": "/weather/broken-clouds.png",
      // облачно (ночь)
      "09d": "/weather/shower-rain.png",
      // дождь (день)
      "09n": "/weather/shower-rain.png",
      // дождь (ночь)
      "10d": "/weather/rain.png",
      // дождь (день)
      "10n": "/weather/rain.png",
      // дождь (ночь)
      "11d": "/weather/thunderstorm.png",
      // гроза (день)
      "11n": "/weather/thunderstorm.png",
      // гроза (ночь)
      "13d": "/weather/snow.png",
      // снег (день)
      "13n": "/weather/snow.png",
      // снег (ночь)
      "50d": "/weather/mist.png",
      // туман (день)
      "50n": "/weather/mist.png"
      // туман (ночь)
    };
    const weatherCards = [];
    const refWeatherCards = ref(weatherCards);
    let error = "";
    const refError = ref(error);
    const addCity = () => {
      if (city.message.trim().length < 2) {
        refError.value = "You need to enter a name with a length of more than 1.";
        return;
      }
      refError.value = "";
      const cutToSpace = (str) => {
        const currentDate = str;
        const index = currentDate.indexOf(" ");
        const result = currentDate.substring(0, index);
        return result;
      };
      axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city.message}&units=metric&lang=ru&appid=b93ead9e942361f9190e775a6220a511`
      ).then((res) => {
        info = res.data;
        city.message = "";
        const daysMap = /* @__PURE__ */ new Map();
        for (const item of info.list) {
          const itemDate = new Date(item.dt_txt).toDateString();
          if (!daysMap.has(itemDate)) {
            daysMap.set(itemDate, item);
          }
          if (daysMap.size > 3) {
            break;
          }
        }
        const days = Array.from(daysMap.values());
        refWeatherCards.value.push({
          id: id++,
          city: info.city.name,
          deg: Math.round(days[0].main.temp),
          condition: days[0].weather[0].description,
          humidity: days[0].main.humidity,
          wind: days[0].wind.speed,
          date: cutToSpace(days[0].dt_txt),
          weatherId: days[0].weather[0].icon,
          nextDay: {
            deg: Math.round(days[1].main.temp),
            condition: days[1].weather[0].description,
            humidity: days[1].main.humidity,
            wind: days[1].wind.speed,
            date: cutToSpace(days[1].dt_txt)
          },
          thirdDay: {
            deg: Math.round(days[2].main.temp),
            condition: days[2].weather[0].description,
            humidity: days[2].main.humidity,
            wind: days[2].wind.speed,
            date: cutToSpace(days[2].dt_txt)
          },
          fourthDay: {
            deg: Math.round(days[3].main.temp),
            condition: days[3].weather[0].description,
            humidity: days[3].main.humidity,
            wind: days[3].wind.speed,
            date: cutToSpace(days[3].dt_txt)
          }
        });
      }).catch((error2) => {
        console.error("Error fetching data:", error2);
        refError.value = "The name of the city was entered incorrectly.";
      });
    };
    const city = reactive({ message: "" });
    provide("city", city);
    ref();
    const deleteAllCards = () => {
      refWeatherCards.value.splice(0, refWeatherCards.value.length);
      id = 0;
    };
    const deleteCard = (cardId) => {
      console.log(cardId);
      refWeatherCards.value.splice(cardId, 1);
      id--;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TodayWeather = _sfc_main$4;
      const _component_LaterWeather = _sfc_main$3;
      const _component_BaseInput = _sfc_main$2;
      const _component_BaseButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center gap-5 h-full min-h-[500px] justify-center" }, _attrs))}><div class="flex gap-2 carousel w-full relative justify-start"><!--[-->`);
      ssrRenderList(unref(refWeatherCards), (card) => {
        _push(ssrRenderComponent(_component_TodayWeather, {
          class: "carousel-item w-full max-w-96 flex items-center justify-center",
          key: card.id,
          city: card.city,
          deg: card.deg,
          condition: card.condition,
          humidity: card.humidity,
          wind: card.wind,
          date: card.date,
          onDeleteRequest: ($event) => deleteCard(card.id),
          id: "item" + card.id
        }, {
          cards: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_LaterWeather, {
                deg: card.nextDay.deg,
                condition: card.nextDay.condition,
                humidity: card.nextDay.humidity,
                wind: card.nextDay.wind,
                date: card.nextDay.date
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_LaterWeather, {
                deg: card.thirdDay.deg,
                condition: card.thirdDay.condition,
                humidity: card.thirdDay.humidity,
                wind: card.thirdDay.wind,
                date: card.thirdDay.date
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_LaterWeather, {
                deg: card.fourthDay.deg,
                condition: card.fourthDay.condition,
                humidity: card.fourthDay.humidity,
                wind: card.fourthDay.wind,
                date: card.fourthDay.date
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_LaterWeather, {
                  deg: card.nextDay.deg,
                  condition: card.nextDay.condition,
                  humidity: card.nextDay.humidity,
                  wind: card.nextDay.wind,
                  date: card.nextDay.date
                }, null, 8, ["deg", "condition", "humidity", "wind", "date"]),
                createVNode(_component_LaterWeather, {
                  deg: card.thirdDay.deg,
                  condition: card.thirdDay.condition,
                  humidity: card.thirdDay.humidity,
                  wind: card.thirdDay.wind,
                  date: card.thirdDay.date
                }, null, 8, ["deg", "condition", "humidity", "wind", "date"]),
                createVNode(_component_LaterWeather, {
                  deg: card.fourthDay.deg,
                  condition: card.fourthDay.condition,
                  humidity: card.fourthDay.humidity,
                  wind: card.fourthDay.wind,
                  date: card.fourthDay.date
                }, null, 8, ["deg", "condition", "humidity", "wind", "date"])
              ];
            }
          }),
          "weather-icon": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (card.weatherId === "01d" || card.weatherId === "01n") {
                _push2(`<img${ssrRenderAttr("src", weatherIcons["01d"])} alt="clear sky"${_scopeId}>`);
              } else if (card.weatherId === "02d" || card.weatherId === "02n") {
                _push2(`<img${ssrRenderAttr("src", weatherIcons["02d"])} alt="few clouds"${_scopeId}>`);
              } else if (card.weatherId === "03d" || card.weatherId === "03n") {
                _push2(`<img${ssrRenderAttr("src", weatherIcons["03d"])} alt="scattered clouds"${_scopeId}>`);
              } else if (card.weatherId === "04d" || card.weatherId === "04n") {
                _push2(`<img${ssrRenderAttr("src", weatherIcons["04d"])} alt="broken clouds"${_scopeId}>`);
              } else if (card.weatherId === "09d" || card.weatherId === "09n") {
                _push2(`<img${ssrRenderAttr("src", weatherIcons["09d"])} alt="shower rain"${_scopeId}>`);
              } else if (card.weatherId === "10d" || card.weatherId === "10n") {
                _push2(`<img${ssrRenderAttr("src", weatherIcons["10d"])} alt="rain"${_scopeId}>`);
              } else if (card.weatherId === "11d" || card.weatherId === "11n") {
                _push2(`<img${ssrRenderAttr("src", weatherIcons["11d"])} alt="thunderstorm"${_scopeId}>`);
              } else if (card.weatherId === "13d" || card.weatherId === "13n") {
                _push2(`<img${ssrRenderAttr("src", weatherIcons["13d"])} alt="snow"${_scopeId}>`);
              } else if (card.weatherId === "50d" || card.weatherId === "50n") {
                _push2(`<img${ssrRenderAttr("src", weatherIcons["50d"])} alt="mist"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                card.weatherId === "01d" || card.weatherId === "01n" ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: weatherIcons["01d"],
                  alt: "clear sky"
                }, null, 8, ["src"])) : card.weatherId === "02d" || card.weatherId === "02n" ? (openBlock(), createBlock("img", {
                  key: 1,
                  src: weatherIcons["02d"],
                  alt: "few clouds"
                }, null, 8, ["src"])) : card.weatherId === "03d" || card.weatherId === "03n" ? (openBlock(), createBlock("img", {
                  key: 2,
                  src: weatherIcons["03d"],
                  alt: "scattered clouds"
                }, null, 8, ["src"])) : card.weatherId === "04d" || card.weatherId === "04n" ? (openBlock(), createBlock("img", {
                  key: 3,
                  src: weatherIcons["04d"],
                  alt: "broken clouds"
                }, null, 8, ["src"])) : card.weatherId === "09d" || card.weatherId === "09n" ? (openBlock(), createBlock("img", {
                  key: 4,
                  src: weatherIcons["09d"],
                  alt: "shower rain"
                }, null, 8, ["src"])) : card.weatherId === "10d" || card.weatherId === "10n" ? (openBlock(), createBlock("img", {
                  key: 5,
                  src: weatherIcons["10d"],
                  alt: "rain"
                }, null, 8, ["src"])) : card.weatherId === "11d" || card.weatherId === "11n" ? (openBlock(), createBlock("img", {
                  key: 6,
                  src: weatherIcons["11d"],
                  alt: "thunderstorm"
                }, null, 8, ["src"])) : card.weatherId === "13d" || card.weatherId === "13n" ? (openBlock(), createBlock("img", {
                  key: 7,
                  src: weatherIcons["13d"],
                  alt: "snow"
                }, null, 8, ["src"])) : card.weatherId === "50d" || card.weatherId === "50n" ? (openBlock(), createBlock("img", {
                  key: 8,
                  src: weatherIcons["50d"],
                  alt: "mist"
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex justify-center w-full py-2 gap-2 absolute bottom-0 flex-wrap"><!--[-->`);
      ssrRenderList(unref(refWeatherCards), (card) => {
        _push(`<a${ssrRenderAttr("href", "#item" + card.id)} class="btn btn-xs">${ssrInterpolate(card.id + 1)}</a>`);
      });
      _push(`<!--]--></div><div class="flex gap-1 flex-col items-center mt-auto pb-4 relative"><p class="text-red-900">${ssrInterpolate(unref(refError))}</p><div class="flex">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        onClickRequest: ($event) => addCity()
      }, null, _parent));
      _push(`<div class="absolute -bottom-2 text-slate-800 min-w-[200px] text-nowrap text-center"> You want to check weather at ${ssrInterpolate(unref(city).message == "" ? "your city" : "<" + unref(city).message + ">")}</div>`);
      if (unref(city).message.length > 0) {
        _push(ssrRenderComponent(_component_BaseButton, {
          onClickRequest: ($event) => addCity()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Add`);
            } else {
              return [
                createTextVNode("Add")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_BaseButton, {
          disabled: "",
          onClickRequest: ($event) => addCity()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Add`);
            } else {
              return [
                createTextVNode("Add")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        style: weatherCards.length > 0 ? null : { display: "none" },
        onClickRequest: ($event) => deleteAllCards(),
        class: "absolute -bottom-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete all `);
          } else {
            return [
              createTextVNode(" Delete all ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BRTTY4pc.js.map
