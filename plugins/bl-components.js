import Vue from 'vue'
import {
  Card, CycleButton, ParamsItem, 
  Swipe, ParamsList
} from '~/components/Global'

const components = { Card, CycleButton, ParamsItem, Swipe, ParamsList  }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
