 about-team-modal

 (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      const isModalOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
      refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
      refs.modal.classList.toggle('is-hidden');
  
      const scrollLockMethod = !isModalOpen ? 'disableBodyScroll' : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    }
  })();

// <div class="about-team-modal is-hidden" data-modal>
//     <div class="about-team-window">
//         <ul class="about-team-list">
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title">Dima Savchuk</h2>
//                 <p class="about-team-role">Team Lead</p>
//                 <p class="about-team-details">favicon</p>
//             </li>
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title">Artemieva Kateryna</h2>
//                 <p class="about-team-role">Scrum Master</p>
//                 <p class="about-team-details">Header</p>
//             </li>
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title">Sergii Molchanov</h2>
//                 <p class="about-team-role">Team member</p>
//                 <p class="about-team-details">Support Ukraine section</p>
//             </li>
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title">Yurii Mahdych</h2>
//                 <p class="about-team-role">Team member</p>
//                 <p class="about-team-details">Modal windows</p>
//             </li>
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title">Zviezdilin Artem</h2>
//                 <p class="about-team-role">Team member</p>
//                 <p class="about-team-details">Footer and "about team" modal window</p>
//             </li>
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title"></h2>
//                 <p class="about-team-role">Team member</p>
//                 <p class="about-team-details"></p>
//             </li>
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title"></h2>
//                 <p class="about-team-role">Team member</p>
//                 <p class="about-team-details"></p>
//             </li>
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title"></h2>
//                 <p class="about-team-role">Team member</p>
//                 <p class="about-team-details"></p>
//             </li>
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title"></h2>
//                 <p class="about-team-role">Team member</p>
//                 <p class="about-team-details"></p>
//             </li>
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title"></h2>
//                 <p class="about-team-role">Team member</p>
//                 <p class="about-team-details"></p>
//             </li>
//             <li class="about-team-item">
//                 <img src="" alt="" class="about-team-photo">
//                 <h2 class="about-team-title"></h2>
//                 <p class="about-team-role">Team member</p>
//                 <p class="about-team-details"></p>
//             </li>
//         </ul>
//     </div>
// </div>