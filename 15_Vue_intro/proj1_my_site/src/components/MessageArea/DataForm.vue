<template>
  <form ref="form" class="data-form-container" @submit.prevent="handleSubmit">
    <section class="form-item">
      <div class="field-nickname">
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="用户昵称"
          maxlength="10"
          v-model="nickname"
        />
        <span class="tip">{{nickname.length}}/10</span>
      </div>
      <div class="error">{{ err.nickname }}</div>
    </section>
    <section class="form-item content">
      <div class="field-content">
        <textarea
          maxlength="300"
          rows="6"
          id="content"
          class="content"
          name="content"
          placeholder="输入内容"
          v-model.trim="content"
        ></textarea>
        <span class="tip">{{content.length}}/300</span>
      </div>
      <div class="error">{{ err.content }}</div>
    </section>
    <section class="form-item">
      <div class="tool">
        <button :disabled="inOperation">
          {{ inOperation ? "提交中..." : "提交" }}
        </button>
      </div>
    </section>
  </form>
</template>

<script>
export default {
  name: "DataForm",
  data() {
    return {
      inOperation: false,
      nickname: '',
      content: '',
      err: {
        nickname: '',
        content: ''
      }
    };
  },
  methods: {
    showSuccess(content) {
      this.$getMessage({
        content,
        type: 'success',
        duration: 1000,
        container: this.$refs.form,
        callback: () => {
          this.nickname = '';
          this.content = '';
          this.inOperation = false;
        }
      });
    },
    showError(content) {
      this.$getMessage({
        content,
        type: 'error',
        duration: 1000,
        container: this.$refs.form,
        callback: () => {
          this.inOperation = false;
        }
      });
    },
    handleSubmit() {
      // validation logics
      this.err.content = '';
      this.err.nickname = '';
      if(this.nickname.trim().length === 0) {
        this.err.nickname = '昵称不能为空！';
        this.nickname = '';
      }
      if(this.content.trim().length === 0) {
        this.err.content = '昵称不能为空！';
        this.content = '';
      }
      if([this.content, this.nickname].some(d => d === '')) {
        return;
      }
      
      // submit new comment
      const params = {
        nickname: this.nickname,
        content: this.content
      };
      this.inOperation = true;
      this.$emit('submit', params, ({content, code}) => 
        (code === 0) 
          ? this.showSuccess(content)
          : this.showError(content)
      );
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/variables.less";

.data-form-container {
  margin-block-start: 5em;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  padding-inline: 2em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;

  & .form-item {
    display: flex;
    flex-direction: column;
    justify-items: left;

    & > .field-nickname {
      position: relative;
      border: 1px dashed @primary;
      border-radius: 0.3em;

      & > input {
        padding: 0.625em 0 0.625em 1em;
        font-size: 1rem;
        border: none;
        outline: none;
        width: 300px;
      }

      & > .tip {
        position: absolute;
        right: 0.25em;
        top: 0.75em;
        font-size: 0.875rem;
        color: lighten(@gray, 10%);
      }
    }

    & > .error {
      text-align: left;
      color: @danger;
      font-size: 0.875rem;
      height: 14px;
      line-height: 14px;
    }

    &.content {
      width: 100%;
    }
    & .field-content {
      width: 100%;
      border: 1px dashed @primary;
      border-radius: 0.3em;

      position: relative;

      & > .tip {
        position: absolute;
        right: 0.25em;
        bottom: 0.25em;
        font-size: 0.875rem;
        color: lighten(@gray, 10%);
      }

      & .content {
        width: 100%;
        outline: none;
        border: none;
        padding-inline: 1em;
        padding-block: 0.375em;
        font-size: 1rem;
        resize: none;
        white-space: pre-line;
      }
    }

    & .field-nickname,
    & .field-content {
      &:focus-within {
        border: 1.5px dashed darken(@primary, 20%);
      }
    }
  }

  & .tool > button {
    background-color: darken(@primary, 10%);
    padding: 0.75em 3em;
    border: none;
    color: @white;
    font-size: 0.875rem;
    border-radius: 0.3em;
    cursor: pointer;
    letter-spacing: 1ch;

    &:disabled {
      cursor: not-allowed;
      background-color: lighten(@primary, 10%);
      letter-spacing: 0;
    }
  }
}
</style>
