export default function createModalInputSettings() {
  const form = document.querySelector('.modal');
  const settingsLink = document.querySelector('#settings');
  console.log(settingsLink);
  console.log(form);

  settingsLink.addEventListener('click', (() => {
    console.log('works');
  }))


}