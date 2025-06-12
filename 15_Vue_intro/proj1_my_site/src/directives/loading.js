import styles from './loading.module.less';
import loadingSrc from '@/assets/loading.svg';

const createLoadingSpinner = () => {
  const spinner = document.createElement('img');
  spinner.dataset.role = 'loading';
  spinner.classList.add(styles.loading);
  spinner.src = loadingSrc;
  return spinner;
};

const checkSpinner = (parent) => {
  return parent.querySelector('img[data-role="loading"]');
};

export default function update(el, binding) {
  const spinner = checkSpinner(el);
  if(binding.value) {
    // render loading spinner
    if(!spinner) {
      const spinner = createLoadingSpinner();
      // add loading spinner to element
      el.classList.add(styles.relative);
      el.appendChild(spinner);
    }
  } else {
    if(spinner) {
      // remove loading spinner
      spinner.remove();
      el.classList.remove(styles.relative);
    }
  }
};