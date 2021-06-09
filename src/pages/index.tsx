import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import Button from '@/components/atoms/Button';
import ComponentLabel from '@/components/molecules/ComponentLabel';

const Home = () => {
  return (
    <Layout>
      <div css={container}>
        <main>
          <h2 css={pageTitle}>Buttons</h2>
          <div css={buttonRows}>
            <div css={buttonRow(2)}>
              <ComponentLabel
                htmlFor="<Button />"
                label="<Button />"
                component={<Button />}
              />
              <ComponentLabel
                htmlFor="<Button>Register</Button>"
                label="<Button>Register</Button>"
                component={<Button>Register</Button>}
              />
              <ComponentLabel
                htmlFor={'<Button variant="outline" color="primary" />'}
                label={'<Button variant="outline" color="primary" />'}
                component={<Button variant="outline" color="primary" />}
              />
              <ComponentLabel
                htmlFor={'<Button variant="text" color="primary" />'}
                label={'<Button variant="text" color="primary" />'}
                component={<Button variant="text" color="primary" />}
              />
            </div>
            <div css={buttonRow(3)}>
              <ComponentLabel
                htmlFor={'<Button disableShadow color="primary" />'}
                label={'<Button disableShadow color="primary" />'}
                component={<Button disableShadow color="primary" />}
              />
              <ComponentLabel
                htmlFor={'<Button disabled>Disabled</Button>'}
                label={'<Button disabled>Disabled</Button>'}
                component={<Button disabled>Disabled</Button>}
              />
              <ComponentLabel
                htmlFor={'<Button variant="text" disabled>Disabled</Button>'}
                label={'<Button variant="text" disabled>Disabled</Button>'}
                component={
                  <Button variant="text" disabled>
                    Disabled
                  </Button>
                }
              />
            </div>
            <div css={buttonRow(2)}>
              <ComponentLabel
                htmlFor={
                  '<Button startIcon="local_grocery_store" color="primary" />'
                }
                label={
                  '<Button startIcon="local_grocery_store" color="primary" />'
                }
                component={
                  <Button startIcon="local_grocery_store" color="primary" />
                }
              />
              <ComponentLabel
                htmlFor={
                  '<Button endIcon="local_grocery_store" color="primary" />'
                }
                label={
                  '<Button endIcon="local_grocery_store" color="primary" />'
                }
                component={
                  <Button endIcon="local_grocery_store" color="primary" />
                }
              />
              <ComponentLabel
                htmlFor={
                  '<Button startIcon="local_shipping" color="primary" />'
                }
                label={'<Button startIcon="local_shipping" color="primary" />'}
                component={
                  <Button startIcon="local_shipping" color="primary" />
                }
              />
              <ComponentLabel
                htmlFor={
                  '<Button endIcon="add_shopping_cart" color="primary" />'
                }
                label={'<Button endIcon="add_shopping_cart" color="primary" />'}
                component={
                  <Button startIcon="add_shopping_cart" color="primary" />
                }
              />
              <ComponentLabel
                htmlFor={
                  '<Button endIcon="production_quantity_limits" color="primary" />'
                }
                label={
                  '<Button endIcon="production_quantity_limits" color="primary" />'
                }
                component={
                  <Button
                    startIcon="production_quantity_limits"
                    color="primary"
                  />
                }
              />
              <ComponentLabel
                htmlFor={
                  '<Button startIcon="remove_shopping_cart" color="primary" />'
                }
                label={
                  '<Button startIcon="remove_shopping_cart" color="primary" />'
                }
                component={
                  <Button startIcon="remove_shopping_cart" color="primary" />
                }
              />
            </div>
            <div css={buttonRow(3)}>
              <ComponentLabel
                htmlFor={'<Button size="sm" color="primary" />'}
                label={'<Button size="sm" color="primary" />'}
                component={<Button size="sm" color="primary" />}
              />
              <ComponentLabel
                htmlFor={'<Button size="md" color="primary" />'}
                label={'<Button size="md" color="primary" />'}
                component={<Button size="md" color="primary" />}
              />
              <ComponentLabel
                htmlFor={'<Button size="lg" color="primary"/>'}
                label={'<Button size="lg" color="primary" />'}
                component={<Button size="lg" color="primary" />}
              />
            </div>
            <div css={buttonRow(4)}>
              <ComponentLabel
                htmlFor={'<Button color="default" />'}
                label={'<Button color="default" />'}
                component={<Button color="default" />}
              />
              <ComponentLabel
                htmlFor={'<Button color="primary" />'}
                label={'<Button color="primary" />'}
                component={<Button color="primary" />}
              />
              <ComponentLabel
                htmlFor={'<Button color="secondary" />'}
                label={'<Button color="secondary" />'}
                component={<Button color="secondary" />}
              />
              <ComponentLabel
                htmlFor={'<Button color="danger" />'}
                label={'<Button color="danger" />'}
                component={<Button color="danger" />}
              />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

const container = css`
  padding: 56px 80px 56px 80px;
  margin: 0 auto;
`;

const pageTitle = css`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
`;

const buttonRows = css`
  display: grid;
  grid-row-gap: 45px;
  padding-top: 24px;
`;

const buttonRow = (column: number) => {
  return css`
    display: grid;
    grid-template-columns: repeat(${column}, max-content);
    grid-row-gap: 45px;
    grid-column-gap: 64px;
  `;
};

export default Home;
