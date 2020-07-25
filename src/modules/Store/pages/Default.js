import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="container-fluid dashboard__container clearfix">
    <div className="pf-pb-24">
      <div ents='["stores"]'>
        <div style={{ position: 'relative' }}>
          <div className="loading-overlay loading-overlay--alt" />
          <div>
            <div className="pf-cards my-stores">
              <h2 className="pf-h2 pf-my-40">Stores</h2>{' '}
              <a href="#">
                <div className="pf-border pf-cards__item pf-p-24 pf-mt-12 pf-pointer">
                  <div className="pf-d-flex pf-justify-content-between pf-w-100">
                    <div className="pf-position-relative">
                      <img
                        src="https://static.cdn.printful.com/static/v767/images/integrations/shopify.svg"
                        alt="hello world1111"
                        className="store-logo pf-mr-16"
                      />{' '}
                      {/**/}
                    </div>{' '}
                    <div className="pf-d-flex pf-justify-content-between pf-flex-column pf-flex-sm-row pf-align-items-sm-center pf-w-100">
                      <div>
                        <h4 className="pf-h4 pf-m-0 pf-text-dark pf-d-sm-inline">
                          Your Store
                        </h4>{' '}
                        <span
                          className="pf-mt-2 pf-mt-sm-0 pf-ml-sm-8 store-status pf-badge pf-badge-small pf-badge--success"
                          itle
                          title
                        >
                          Active
                        </span>{' '}
                        {/**/}
                      </div>{' '}
                      <div className="pf-d-sm-flex">
                        <button
                          className="pf-btn pf-btn-secondary pf-w-100 pf-w-sm-auto pf-mt-16 pf-mt-sm-0 pf-mr-12"
                          type="button"
                        >
                          Add product
                        </button>{' '}
                        <button
                          className="pf-btn pf-btn-primary pf-w-100 pf-w-sm-auto pf-mt-12 pf-mt-sm-0"
                          type="button"
                        >
                          View store
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>{' '}
            <div className="pf-mt-40 store-explore-blocks pf-d-flex pf-flex-wrap pf-flex-sm-nowrap">
              <div className="basis-100 basis-sm-25 grow-1">
                <div className="pf-cards">
                  <div className="pf-border pf-cards__item pf-p-24 pf-pointer pf-d-flex pf-h-100">
                    <a
                      href="/landing/overview"
                      className="pf-d-flex pf-justify-content-between pf-w-100"
                    >
                      <div className="pf-mr-16">
                        <i className="pf-i pf-i-plus-circle pf-i-48 pf-text-green" />
                      </div>{' '}
                      <div className="pf-d-flex pf-justify-content-between pf-flex-column pf-flex-sm-row pf-align-items-sm-center pf-w-100">
                        <div>
                          <h4 className="pf-h4 pf-m-0">
                            Want to increase your sales with Printful?
                          </h4>{' '}
                          <p className="pf-text-muted pf-mt-2 pf-mb-0 pf-ui-caption">
                            Reach more customers by selling on an{' '}
                            <strong>additional platform</strong> today!
                          </p>{' '}
                          {/**/}
                        </div>{' '}
                        <div>
                          <span className="pf-btn pf-btn-secondary pf-d-block pf-d-sm-inline-block pf-mt-16 pf-mt-sm-0">
                            Compare platforms
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>{' '}
              {/**/}
            </div>
          </div>{' '}
          <div className="pf-mt-64 pf-mb-16">
            <h4 className="pf-h3 pf-m-0">
              To create a new store, choose your method
            </h4>{' '}
            <div className="pf-mt-24 pf-cards">
              {/**/}{' '}
              <div className="row pf-d-flex pf-flex-wrap pf-justify-content-center pf-ui-body">
                <div className="col-sm-6 col-lg-4 pf-d-flex">
                  <div className="pf-d-flex pf-flex-column pf-cards__item pf-border pf-pointer pf-w-100 pf-mt-24">
                    <div className="pf-bg-lighter pf-p-16 grow-1 shrink-0 basis-auto">
                      <div className="text-center pf-bold">
                        Choose your store's platform
                        <div className="pf-mt-24">
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/cb/cb14c4ed89b4523a1f8affb6ed7f3fa3_t?v=1590473065"
                            alt="Shopify"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/e1/e1be5e18786a1dcc6be0f344985652eb_t?v=1590473065"
                            alt="Etsy"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/f8/f89ad4e63ea94075c9966c310eb90e34_t?v=1590473065"
                            alt="WooCommerce"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/1a/1a3633f220effa4ac4506facc7b8ad44_t?v=1590473065"
                            alt="Wix"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/7f/7fb21621d94cb6cdf8ad0abce8672d4a_t?v=1590473065"
                            alt="Squarespace"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/d9/d957edda9a41784a5624f680e8927655_t?v=1591078064"
                            alt="Webflow"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/58/58d28ec29b3dc7fa4386704ebd4cee84_t?v=1590473065"
                            alt="Ecwid"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/c0/c07b4130152c5c5dc58cf3647a2ad73f_t?v=1590473065"
                            alt="BigCommerce"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/af/af34db7a181345ed44921f95255e0791_t?v=1590473065"
                            alt="Prestashop"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/b1/b1f00fadcec3feb808e5ee753ad3571a_t?v=1590473065"
                            alt="Weebly"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/fb/fb9b4a0232eea80175e5daf533e0ed6b_t?v=1590473065"
                            alt="Amazon"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/dc/dc172a00cc3f153912faf36da512195e_t?v=1590473065"
                            alt="eBay"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/62/62e573c831f28b25ba2486c9dfebc982_t?v=1590473065"
                            alt="Big Cartel"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/fa/fa4ef743382e228b4ff7eaee929d6741_t?v=1590473065"
                            alt="Wish"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/ea/eaa8d2d70b97dad10b6a60f0e4808171_t?v=1590473065"
                            alt="Magento"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/2a/2ab8715c2d7ac0e337ea1186322ac90a_t?v=1592389244"
                            alt="Storenvy"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/db/db4459d9e77d098fb881c11b06a6b466_t?v=1590473065"
                            alt="Gumroad"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/dd/dd1628864b46cd2cc0fb716b9b845dc0_t?v=1592386600"
                            alt="Bonanza"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/97/971e40881786c93a7c6886f0b545bbec_t?v=1590473065"
                            alt="3dcart"
                            height="36px"
                            className="pf-m-2"
                          />
                          <img
                            src="https://files.cdn.printful.com/upload/integration-comp/0a/0a8b537d9287ae08f993b7462b4aeec5_t?v=1590473065"
                            alt="Launch Cart"
                            height="36px"
                            className="pf-m-2"
                          />
                        </div>
                      </div>
                    </div>{' '}
                    <div className="pf-m-16">
                      <Link
                        to="/store/connect"
                        className="pf-btn pf-btn-primary pf-btn-block"
                      >
                        Choose platform
                      </Link>
                    </div>
                  </div>
                </div>{' '}
                <div className="col-sm-6 col-lg-4 pf-d-flex">
                  <div className="pf-d-flex pf-flex-column pf-cards__item pf-border pf-pointer pf-w-100 pf-mt-24">
                    <div className="pf-bg-lighter pf-p-16 grow-1 shrink-0 basis-auto">
                      <div className="text-center pf-bold">
                        Use Shipstation to connect to
                        <div className="pf-mt-24 pf-mb-12">
                          <img
                            src="https://static.cdn.printful.com/static/v767/images/integrations/opencartv2.png"
                            alt="opencart"
                            height="36px"
                            className="pf-m-2"
                          />{' '}
                          <img
                            src="https://static.cdn.printful.com/static/v767/images/integrations/walmart.svg"
                            alt="walmart"
                            height="36px"
                            className="pf-m-2"
                          />{' '}
                          <img
                            src="https://static.cdn.printful.com/static/v767/images/integrations/volusion.png"
                            alt="volusion"
                            height="36px"
                            className="pf-m-2"
                          />
                        </div>
                        and more
                      </div>
                    </div>{' '}
                    <div className="pf-m-16">
                      <a
                        href="/dashboard/connect/shipstation"
                        className="pf-btn pf-btn-primary pf-btn-block"
                      >
                        Choose ShipStation
                      </a>
                    </div>
                  </div>
                </div>{' '}
                <div className="col-sm-6 col-lg-4 pf-d-flex">
                  <div
                    id="create-new-store"
                    className="pf-d-flex pf-flex-column pf-cards__item pf-border pf-pointer pf-w-100 pf-mt-24"
                  >
                    <div className="pf-bg-lighter pf-p-16 text-center pf-bold grow-1 shrink-0 basis-auto">
                      Manual order platform / API
                      <img
                        src="https://static.cdn.printful.com/static/v767/images/layout/manual-store.svg"
                        alt="Create new store"
                        className="img-responsive pf-mt-24 pf-mb-12 pf-mx-auto pf-d-block"
                      />
                    </div>{' '}
                    <div className="pf-m-16">
                      <a
                        href="#"
                        className="pf-btn pf-btn-secondary pf-btn-block"
                      >
                        Create
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
