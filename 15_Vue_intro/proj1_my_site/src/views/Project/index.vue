<template>
  <div class="project-container">
    <figure class="project-item">
      <a href="" target="_blank">
        <img src="../../assets/demo_cover.png" alt="cover image" title="项目标题" class="thumb">
      </a>
      <figcaption class="info">
        <h2 class="caption"><a href="">项目标题</a><a href=""></a></h2>
        <p>项目描述</p>
        <p>项目描述</p>
        <p>项目描述</p>
      </figcaption>
    </figure>
    <figure class="project-item">
      <a href="" target="_blank">
        <img src="../../assets/demo_cover.png" alt="cover image" title="项目标题" class="thumb">
      </a>
      <figcaption class="info">
        <h2 class="caption">
          <a href="" class="title">项目标题</a>
          <a href=""><img src="../../assets/gh.svg" alt="GitHub repo" title="GitHub repo"></a>
        </h2>
        <p>项目描述</p>
        <p>项目描述</p>
        <p>项目描述</p>
      </figcaption>
    </figure>
    <figure class="project-item">
      <a href="" target="_blank">
        <img src="../../assets/demo_cover.png" alt="cover image" title="项目标题" class="thumb">
      </a>
      <figcaption class="info">
        <h2 class="caption"><a href="">项目标题</a><a href=""></a></h2>
        <p>项目描述</p>
        <p>项目描述</p>
        <p>项目描述</p>
      </figcaption>
    </figure>
    <figure class="project-item">
      <a href="" target="_blank">
        <img src="../../assets/demo_cover.png" alt="cover image" title="项目标题" class="thumb">
      </a>
      <figcaption class="info">
        <h2 class="caption">
          <a href="" class="title">项目标题</a>
          <a href=""><img src="../../assets/gh.svg" alt="GitHub repo" title="GitHub repo"></a>
        </h2>
        <p>项目描述</p>
        <p>项目描述</p>
        <p>项目描述</p>
      </figcaption>
    </figure>
    <figure class="project-item">
      <a href="" target="_blank">
        <img src="../../assets/demo_cover.png" alt="cover image" title="项目标题" class="thumb">
      </a>
      <figcaption class="info">
        <h2 class="caption"><a href="">项目标题</a><a href=""></a></h2>
        <p>项目描述</p>
        <p>项目描述</p>
        <p>项目描述</p>
      </figcaption>
    </figure>
    <figure class="project-item">
      <a href="" target="_blank">
        <img src="../../assets/demo_cover.png" alt="cover image" title="项目标题" class="thumb">
      </a>
      <figcaption class="info">
        <h2 class="caption">
          <a href="" class="title">项目标题</a>
          <a href=""><img src="../../assets/gh.svg" alt="GitHub repo" title="GitHub repo"></a>
        </h2>
        <p>项目描述</p>
        <p>项目描述</p>
        <p>项目描述</p>
      </figcaption>
    </figure>
    <figure class="project-item">
      <a href="" target="_blank">
        <img src="../../assets/demo_cover.png" alt="cover image" title="项目标题" class="thumb">
      </a>
      <figcaption class="info">
        <h2 class="caption"><a href="">项目标题</a><a href=""></a></h2>
        <p>项目描述</p>
        <p>项目描述</p>
        <p>项目描述</p>
      </figcaption>
    </figure>
    <figure class="project-item">
      <a href="" target="_blank">
        <img src="../../assets/demo_cover.png" alt="cover image" title="项目标题" class="thumb">
      </a>
      <figcaption class="info">
        <h2 class="caption">
          <a href="" class="title">项目标题</a>
          <a href=""><img src="../../assets/gh.svg" alt="GitHub repo" title="GitHub repo"></a>
        </h2>
        <p>项目描述</p>
        <p>项目描述</p>
        <p>项目描述</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/styles/variables.less";
a {
  text-decoration: none;
  color: inherit;
  &:hover {
    color: @primary;
  }
}
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.7;
    flex: 1 1 auto;
    & h2 {
      margin: 0;
    }
  }
  .caption {
    display: flex;
    gap: 0.5em;
  }
}
</style>
