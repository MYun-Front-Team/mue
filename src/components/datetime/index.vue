<template>
  <a class="m-datetime weui-cell weui-cell_access" href="javascript:">
    <slot>
      <div>
        <p :style="{width: $parent.labelWidth, textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-html="title"></p>
        <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
      </div>
      <div class="weui-cell__ft m-cell-primary m-datetime-value" :style="{textAlign: valueTextAlign}">
        {{ currentValue || placeholder}}
        <icon class="m-input-icon" type="warn" v-show="!valid" :title="firstError"></icon>
      </div>
    </slot>
  </a>
</template>

<script>
import Icon from '../icon/index.vue'
import Picker from './datetimepicker'
import Group from '../group/index.vue'
import InlineDesc from '../inline-desc/index.vue'
import Base from '../../libs/base'

export default {
  mixins: [Base],
  components: {
    Group,
    InlineDesc,
    Icon
  },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    inlineDesc: String,
    placeholder: String,
    minYear: Number,
    maxYear: Number,
    confirmText: {
      type: String,
      default: 'ok'
    },
    cancelText: {
      type: String,
      default: 'cancel'
    },
    clearText: String,
    yearRow: {
      type: String,
      default: '{value}'
    },
    monthRow: {
      type: String,
      default: '{value}'
    },
    dayRow: {
      type: String,
      default: '{value}'
    },
    hourRow: {
      type: String,
      default: '{value}'
    },
    minuteRow: {
      type: String,
      default: '{value}'
    },
    required: {
      type: Boolean,
      default: false
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    startDate: String,
    endDate: String,
    valueTextAlign: String
  },
  created () {
    this.currentValue = this.value
    this.handleChangeEvent = true
  },
  data () {
    return {
      currentValue: null,
      valid: true,
      errors: {}
    }
  },
  mounted () {
    const uuid = this.uuid
    this.$nextTick(() => {
      this.$el.setAttribute('id', 'm-datetime-' + uuid)
      this.render()
    })
  },
  computed: {
    pickerOptions () {
      const _this = this
      const options = {
        trigger: '#m-datetime-' + this.uuid,
        format: this.format,
        value: this.currentValue,
        output: '.m-datetime-value',
        confirmText: this.confirmText,
        cancelText: _this.cancelText,
        clearText: _this.clearText,
        yearRow: this.yearRow,
        monthRow: this.monthRow,
        dayRow: this.dayRow,
        hourRow: this.hourRow,
        minuteRow: this.minuteRow,
        minHour: this.minHour,
        maxHour: this.maxHour,
        startDate: this.startDate,
        endDate: this.endDate,
        onConfirm (value) {
          _this.currentValue = value
        },
        onClear (value) {
          _this.$emit('on-clear', value)
        },
        onHide () {
          _this.validate()
        }
      }
      if (this.minYear) {
        options.minYear = this.minYear
      }
      if (this.maxYear) {
        options.maxYear = this.maxYear
      }
      return options
    },
    firstError () {
      let key = Object.keys(this.errors)[0]
      return this.errors[key]
    }
  },
  methods: {
    render () {
      if (this.picker) {
        this.picker.destroy()
      }
      this.picker = new Picker(this.pickerOptions)
    },
    validate () {
      if (!this.currentValue && this.required) {
        this.valid = false
        this.errors.required = '必填'
        return
      }
      this.valid = true
      this.errors = {}
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('on-change', val)
      this.$emit('input', val)
      this.validate()
    },
    startDate () {
      this.render()
    },
    endDate () {
      this.render()
    },
    value (val) {
      if (this.currentValue !== val) {
        this.currentValue = val
        this.picker.destroy()
        this.render()
      }
    }
  },
  beforeDestroy () {
    this.picker.destroy()
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.scroller-component {
  display: block;
  position: relative;
  height: 2.6rem;
  overflow: hidden;
  width: 100%;
}

.scroller-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
}

.scroller-mask {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  z-index: 3;
  background-image:
    linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.6)),
    linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.6));
  background-position: top, bottom;
  background-size: 100% 1.04rem;
  background-repeat: no-repeat;
}

.scroller-item {
  text-align: center;
  font-size: .24rem;
  height: .52rem;
  line-height: .52rem;
  color: #000;
}

.scroller-indicator {
  width: 100%;
  height: .52rem;
  position: absolute;
  left: 0;
  top: 1.04rem;
  z-index: 3;
  background-image:
    linear-gradient(to bottom, #d0d0d0, #d0d0d0, transparent, transparent),
    linear-gradient(to top, #d0d0d0, #d0d0d0, transparent, transparent);
  background-position: top, bottom;
  background-size: 100% 1px;
  background-repeat: no-repeat;
}

.dp-container {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 10000;
  background-color: #fff;
  display: none;
  transition: transform 0.3s ease;
  transform: translateY(100%);
}

.dp-mask {
  z-index: 998;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  opacity: 0;
  transition: opacity 0.1s ease;
  background-color: #000;
  z-index: 9999;
}

.dp-header {
  display: flex;
  width: 100%;
  box-align: center;
  align-items: center;
  background-color: #eee;
  background-position: bottom;
  background-size: 100% 1px;
  background-repeat: no-repeat;
}

.dp-header .dp-item {
  color: @datetime-header-item-font-color;
  font-size: .26rem;
  height: .68rem;
  line-height: .68rem;
  cursor: pointer;
}

.dp-header .dp-item.dp-left {
  color: @datetime-header-item-cancel-font-color;
}

.dp-header .dp-item.dp-right {
  color: @datetime-header-item-confirm-font-color;
}

.dp-content {
  display: flex;
  width: 100%;
  box-align: center;
  align-items: center;
  padding: .2rem 0;
}

.dp-header .dp-item,
.dp-content .dp-item {
  box-sizing: border-box;
  flex: 1;
  text-align: center;
}

.m-datetime .m-input-icon {
  float: right;
}
.m-cell-primary {
  flex: 1;
}
</style>
