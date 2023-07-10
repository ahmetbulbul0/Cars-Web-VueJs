import { createRouter, createWebHistory } from "vue-router";
import Cars from "../views/Cars.vue";
import CarDetail from "../views/CarDetail.vue";
import CarBrands from "../views/CarBrands.vue";
import NewCarBrand from "../views/NewCarBrand.vue";
import CarBrandDetail from "../views/CarBrandDetail.vue";
import CarTypes from "../views/CarTypes.vue";
import NewCarType from "../views/NewCarType.vue";
import CarTypeDetail from "../views/CarTypeDetail.vue";
import NewCar from "../views/NewCar.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cars",
    name: "Cars",
    component: Cars,
  },
  {
    path: "/new-car",
    name: "NewCar",
    component: NewCar,
  },
  {
    path: "/car/:carId",
    name: "CarDetail",
    component: CarDetail,
  },
  {
    path: "/car-brands",
    name: "CarBrands",
    component: CarBrands,
  },
  {
    path: "/new-car-brand",
    name: "NewCarBrand",
    component: NewCarBrand,
  },
  {
    path: "/car-brand/:carBrandId",
    name: "CarBrandDetail",
    component: CarBrandDetail,
  },
  {
    path: "/car-types",
    name: "CarTypes",
    component: CarTypes,
  },
  {
    path: "/new-car-type",
    name: "NewCarType",
    component: NewCarType,
  },
  {
    path: "/car-type/:carTypeId",
    name: "CarTypeDetail",
    component: CarTypeDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
