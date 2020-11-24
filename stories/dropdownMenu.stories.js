export default {
  title: 'Dropdown Menu',
};

export const DropdownList = () => {
  return `
  <div class="tk-m-4">
  <h2>Dropdown Menu</h2>
  <div class="flex-row">
    <div class="flex-col tk-mr-5h">
      <h3>Default</h3>
      <div class="tk-dropdown-menu" style="width:200px">
        <div class="tk-dropdown-menu__item">New direct chat
        </div>
        <div class="tk-dropdown-menu__item">New room...
        </div>
        <div class="tk-dropdown-divider"></div>
        <div class="tk-dropdown-menu__item">Cut

        </div>
        <div class="tk-dropdown-menu__item">Copy
          <i class="tk-dropdown-menu--selected"></i>
        </div>
        <div class="tk-dropdown-menu__item">Paste
        </div>
        <div class="tk-dropdown-divider"></div>
        <div class="tk-dropdown-menu__item">Full screen

        </div>
        <div class="tk-dropdown-menu__item">Minimize

        </div>
      </div>
    </div>
    <div class="flex-col tk-mr-5h">
      <h3>With icons</h3>
      <div class="tk-dropdown-menu" style="width:200px">
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">New direct chat
          <i class="tk-dropdown-menu__icon tk-icon-plus"></i></div>
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">New room...
          <i class="tk-dropdown-menu__icon tk-icon-chats"></i></div>
        <div class="tk-dropdown-divider"></div>
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">Cut
          <i class="tk-dropdown-menu__icon tk-icon-minus-round"></i>
        </div>
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">Copy
          <i class="tk-dropdown-menu__icon tk-icon-copy"></i>
        </div>
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">Paste
          <i class="tk-dropdown-menu__icon tk-icon-forward"></i>
          <i class="tk-dropdown-menu--selected"></i>
        </div>
        <div class="tk-dropdown-divider"></div>
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">Full screen
          <i class="tk-dropdown-menu__icon tk-icon-fullscreen-on"></i>
        </div>
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">Minimize
          <i class="tk-dropdown-menu__icon tk-icon-fullscreen-off"></i>
        </div>
      </div>
    </div>
    <div class="flex-col">
      <h3>Expandable</h3>
      <div class="tk-dropdown-menu" style="width:200px">
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">Star
          <i class="tk-dropdown-menu__icon tk-icon-star"></i></div>
          <div class="tk-dropdown-divider"></div>
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">Move to
        <i class="tk-dropdown-menu--expandable"></i>
        </div>
        <div class="tk-dropdown-divider"></div>
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">Hide</div>
        <div class="tk-dropdown-menu__item tk-dropdown-menu__item--icon">Mute
          <i class="tk-dropdown-menu--selected"></i>
        </div>
      </div>
    </div>
  </div>
</div>
`}
