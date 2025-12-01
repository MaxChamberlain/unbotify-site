import { env } from "@/env";

export const getSignInTemplate = async ({ url }: { url: string }) => {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  dir="ltr"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New Message 17</title>
    <!--[if (mso 16)]><style type="text/css"> a {text-decoration: none;}  </style><![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]><noscript> <xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> </noscript>
<![endif]-->
    <!--[if mso]><xml> <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word"> <w:DontUseAdvancedTypographyReadingMail/> </w:WordDocument> </xml>
<![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: block !important;
      }
      .rollover span {
        font-size: 0px;
      }
      u + .body img ~ div div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.n {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors],
      #MessageViewBody a {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .d {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      @media only screen and (max-width: 600px) {
        .bc {
          padding-bottom: 20px !important;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .y p {
        }
        h1 {
          font-size: 40px !important;
          text-align: left;
        }
        h2 {
          font-size: 32px !important;
          text-align: left;
        }
        h3 {
          font-size: 28px !important;
          text-align: left;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .y p,
        .y a {
          font-size: 14px !important;
        }
        .t .rollover:hover .rollover-second,
        .u .rollover:hover .rollover-second,
        .v .rollover:hover .rollover-second {
          display: inline !important;
        }
        .s {
          display: inline-table;
        }
        a.n,
        button.n {
          font-size: 14px !important;
          padding: 10px 20px 10px 20px !important;
          line-height: 120% !important;
        }
        a.n,
        button.n,
        .r {
          display: inline-block !important;
        }
        .j table,
        .k,
        .l {
          width: 100% !important;
        }
        .g table,
        .h table,
        .i table,
        .g,
        .i,
        .h {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .h-auto {
          height: auto !important;
        }
      }
      @media screen and (max-width: 384px) {
        .mail-message-content {
          width: 414px !important;
        }
      }
    </style>
  </head>
  <body
    class="body"
    style="
      width: 100%;
      height: 100%;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      Margin: 0;
    "
  >
    <div
      dir="ltr"
      class="es-wrapper-color"
      lang="en"
      style="background-color: #ffffff"
    >
      <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#ffffff"></v:fill> </v:background><![endif]-->
      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        class="es-wrapper"
        role="none"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          Margin: 0;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; Margin: 0">
            <table
              cellspacing="0"
              cellpadding="0"
              align="center"
              class="h"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
              "
            >
              <tr>
                <td align="center" style="padding: 0; Margin: 0">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    class="ba"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          Margin: 0;
                          padding-top: 20px;
                          padding-right: 20px;
                          padding-left: 20px;
                          border-radius: 8px 8px 0 0;
                        "
                      >
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="left"
                          class="k"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              class="bc"
                              style="padding: 0; Margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 20px;
                                      Margin: 0;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="s"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            Margin: 0;
                                            border-bottom: 1px solid #ffffff;
                                            background: none;
                                            height: 0px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellspacing="0"
              cellpadding="0"
              align="center"
              class="h"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
              "
            >
              <tr>
                <td align="center" style="padding: 0; Margin: 0">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    class="ba"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#fafbfc"
                        style="
                          Margin: 0;
                          padding-top: 10px;
                          padding-right: 30px;
                          padding-bottom: 10px;
                          padding-left: 30px;
                          background-color: #fafbfc;
                          border-radius: 8px 8px 0 0;
                        "
                      >
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="left"
                          class="k"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              class="bc"
                              style="padding: 0; Margin: 0; width: 540px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; Margin: 0; font-size: 0"
                                  >
                                    <img
                                      src="https://unbotify.io/images/logo.png"
                                      alt=""
                                      width="171"
                                      height="71"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellspacing="0"
              cellpadding="0"
              align="center"
              class="g"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; Margin: 0">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    class="z"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#fafbfc"
                        style="
                          padding: 0;
                          Margin: 0;
                          padding-right: 30px;
                          padding-left: 30px;
                          background-color: #fafbfc;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; Margin: 0; width: 540px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; Margin: 0"
                                  >
                                    <h2
                                      style="
                                        Margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 32px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 38.4px;
                                        color: #333333;
                                      "
                                    >
                                      <strong
                                        >Log into the Max Integrations
                                        portal</strong
                                      >
                                    </h2>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellspacing="0"
              cellpadding="0"
              align="center"
              class="i"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
              "
            >
              <tr>
                <td align="center" style="padding: 0; Margin: 0">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    class="y"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#fafbfc"
                        style="
                          padding: 0;
                          Margin: 0;
                          padding-top: 20px;
                          padding-right: 30px;
                          padding-left: 30px;
                          background-color: #fafbfc;
                        "
                      >
                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; Margin: 0; width: 540px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; Margin: 0"
                                  >
                                    <p
                                      style="
                                        Margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Manage your team, projects & progress, and
                                      billing
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        bgcolor="#fafbfc"
                        style="
                          padding: 0;
                          Margin: 0;
                          padding-top: 20px;
                          padding-right: 30px;
                          padding-left: 30px;
                          background-color: #fafbfc;
                        "
                      >
                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; Margin: 0; width: 540px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; Margin: 0"
                                  >
                                    <span
                                      class="r"
                                      style="
                                        border-style: solid;
                                        border-color: #2cb543;
                                        background: #202020;
                                        border-width: 0;
                                        display: inline-block;
                                        border-radius: 8px;
                                        width: auto;
                                      "
                                      ><a
                                        href="${url}"
                                        target="_blank"
                                        class="n"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none !important;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 14px;
                                          padding: 10px 20px 10px 20px;
                                          display: inline-block;
                                          background: #202020;
                                          border-radius: 8px;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          font-weight: normal;
                                          font-style: normal;
                                          line-height: 16.8px;
                                          width: auto;
                                          text-align: center;
                                          letter-spacing: 0;
                                          mso-padding-alt: 0;
                                          mso-border-alt: 10px solid #202020;
                                        "
                                        >Sign In</a
                                      >
                                    </span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        bgcolor="#fafbfc"
                        style="
                          Margin: 0;
                          padding-top: 20px;
                          padding-right: 40px;
                          padding-bottom: 40px;
                          padding-left: 40px;
                          background-color: #fafbfc;
                          border-radius: 0 0 8px 8px;
                        "
                      >
                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; Margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; Margin: 0"
                                  >
                                    <p
                                      style="
                                        Margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong
                                        >What is Max Integrations?</strong
                                      >
                                      A digital solutions company here to solve
                                      any software solutions you may need.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
    `;
};
