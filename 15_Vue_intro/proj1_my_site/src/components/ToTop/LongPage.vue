<template>
  <div ref="container" class="long-page-container">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis unde cum corporis veniam minima, quis pariatur consectetur nihil reprehenderit totam illum perspiciatis eius magnam ipsa consequuntur recusandae est. Asperiores.</p>
    <p>Ex odit tenetur amet dolores, eaque aliquid vero incidunt ad commodi aperiam officia molestias et rem excepturi eos esse! Nemo dolorem aspernatur nisi in, repellat numquam libero! At, architecto placeat.</p>
    <p>Suscipit unde sed eos? Consectetur dolore hic illo placeat voluptas assumenda, dolor exercitationem reiciendis eveniet ipsa qui fugit voluptatem excepturi ut suscipit at beatae rerum maiores. Dolor repellat quod debitis.</p>
    <p>Unde architecto soluta saepe, pariatur, similique recusandae corrupti quasi delectus at nihil nam atque fuga vel ducimus iure porro qui laboriosam laudantium et. Laboriosam explicabo ipsum magni perspiciatis optio voluptas?</p>
    <p>Quis maxime eius, explicabo alias distinctio fugit minima nesciunt autem aliquam nam error odio deleniti. Nisi, id, sed, hic adipisci harum aspernatur quo nemo blanditiis illo praesentium nostrum vero facere?</p>
    <p>Incidunt vitae magni velit, eum officiis, ipsam dolor quis id error, accusantium quia doloremque perspiciatis non cumque maxime veniam unde labore voluptatibus ipsum? Aut dolorum natus atque numquam repellendus culpa!</p>
    <p>In accusamus officia provident sit sequi hic aut adipisci cupiditate! Blanditiis natus similique cumque est id! Molestias delectus iste aspernatur, dolorem beatae exercitationem quam quae reiciendis et! Ut, maxime at!</p>
    <p>Ipsam necessitatibus officiis itaque aut, reprehenderit dolore autem inventore nostrum aliquam, molestias hic voluptatum? Obcaecati quisquam mollitia voluptas alias quasi unde, voluptatum numquam quam incidunt, nobis iusto nemo optio rerum?</p>
    <p>Ab dolor quis vitae quam vero consequuntur, sint ex saepe laboriosam id culpa rerum! Repudiandae fuga neque doloribus labore, quaerat minima non ad ut sapiente, eius harum incidunt molestias? Odio?</p>
    <p>Accusantium quae ipsa a provident sequi doloribus at quibusdam libero temporibus! Praesentium beatae doloremque in rem labore eligendi nulla tenetur, sapiente illum, officia aut placeat nihil vel voluptate ipsum est.</p>
    <p>Delectus sapiente minima debitis quidem minus voluptas, ipsum explicabo ut corporis at maiores dolorum inventore ducimus sed maxime blanditiis mollitia. Magnam dolorem fugiat blanditiis dolorum maiores voluptate inventore odit quibusdam.</p>
    <p>Voluptates delectus iste, consequatur minima repellendus eaque repudiandae quas nisi. Aliquid itaque, aliquam suscipit modi illum mollitia sit excepturi assumenda recusandae dolores beatae magnam culpa error possimus voluptatem sunt omnis?</p>
    <p>Quaerat omnis recusandae culpa tempora saepe nisi perferendis magni, sunt dolorum magnam minima ab facere quis! Labore, nihil magni beatae atque non rerum incidunt, similique necessitatibus, quaerat dolores provident sapiente?</p>
    <p>Doloribus atque laborum excepturi, labore similique fuga veritatis odit magnam eaque? Doloremque, earum vel, voluptatibus voluptate pariatur consequuntur odio facere nam illum repellendus aliquid et possimus culpa quidem temporibus recusandae?</p>
    <p>Praesentium molestias rem aperiam error, pariatur vel velit quibusdam assumenda at corporis ipsam optio placeat in quas expedita vero nihil nisi amet eum? Perspiciatis, voluptate praesentium provident omnis cum iure?</p>
    <p>Eum similique, dignissimos illo, quae atque quaerat magnam temporibus voluptate ratione fugit, totam ducimus perspiciatis! Ut aliquid temporibus quibusdam eius quaerat ipsum voluptatibus animi placeat, possimus non quasi nam alias.</p>
    <p>Doloremque minus ipsam, ratione sequi rem voluptatem recusandae nemo praesentium quisquam eligendi, facilis corrupti impedit laborum exercitationem, magnam reiciendis. Provident temporibus nam tenetur harum, esse vel beatae architecto libero cum?</p>
    <p>Accusamus placeat itaque reiciendis beatae deleniti, nemo ratione eveniet suscipit inventore iste quos. Sit amet optio dolor repudiandae laborum, sint molestias dicta voluptatibus officia cupiditate animi, quas neque, labore saepe?</p>
    <p>Error magnam est laboriosam architecto fugit perferendis natus reprehenderit voluptatum, eligendi, numquam quos. Iure delectus voluptatem provident odit, aperiam ea aspernatur doloremque! Quae, cum? Vitae a sint ipsa inventore accusamus?</p>
    <p>Ex neque molestiae culpa inventore, libero consectetur nemo eos numquam quisquam! Exercitationem suscipit adipisci cumque debitis qui ipsam, eius et vel soluta eligendi dolorem. Obcaecati omnis deserunt libero esse est.</p>
  </div>
</template>

<script>
import { mainScroll } from '@/mixins';

export default {
  name: 'LongPage',
  mixins: [mainScroll('container')],
}
</script>

<style lang="less" scoped>
.long-page-container {
  & > p {
    height: 100px;
    width: 100%;
  }
}
</style>