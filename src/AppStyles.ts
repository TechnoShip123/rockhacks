import styled from '@emotion/styled';

// TODO: Cleanup file for more efficiency, re-use styles for other cases
// TODO: Gradients depend on light/dark mode theme

/**
 * <u>StyledNavLink</u> - <i>Warm</i> gradient (<b>orange/pink</b>), colors when hovered.
 */
export const NavLink_GRADIENT_WARM1 = styled.a`
  &:hover {
    background: linear-gradient(90deg, #FA894A 0%, #EE37FF 100%);
    /* Use text as a mask for background, so gradient text shows */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /*noinspection CssInvalidPropertyValue*/
    //background-clip: text;
    text-fill-color: transparent;
  }
`;

/**
 * <u>StyledNavLink</u> - <i>Cool</i> gradient (<b>blue/green</b>), colors when hovered.
 */
export const NavLink_GRADIENT_COOL1 = styled.a`
  &:hover {
    background: linear-gradient(225deg, #0066FF 0%, #00FF57 100%);
    /* Use text as a mask for background, so gradient text shows */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /*noinspection CssInvalidPropertyValue*/
    //background-clip: text;
    text-fill-color: transparent;
  }
`;

/**
 * <u>StyledNavLink</u> - <i>Cool</i> gradient (<b>blue/pink</b>), colors when hovered.
 */
export const NavLink_GRADIENT_COOL2 = styled.a`
  &:hover {
    background: linear-gradient(90deg, #4AC7FA 0%, #E649F5 100%);
    /* Use text as a mask for background, so gradient text shows */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /*noinspection CssInvalidPropertyValue*/
    //background-clip: text;
    text-fill-color: transparent;
  }
`;
