const dnsPromises = require("dns").promises;

export async function getDnsRecords(domain: string | null | undefined) {
  const records = {
    a: [],
    mx: [],
    txt: [],
    ns: [],
    cname: [],
    srv: [],
  };
  if (!domain) return records;
  const hostname = new URL(domain).hostname;
  domain = hostname.split("/")[0];
  if (!domain) return records;
  try {
    records.a = await dnsPromises.resolve4(domain);
    records.mx = await dnsPromises.resolveMx(domain);
    records.txt = await dnsPromises.resolveTxt(domain);
    records.ns = await dnsPromises.resolveNs(domain);
    try {
      records.srv = await dnsPromises.resolveSrv(domain);
    } catch (error: any) {
      if (error.code === "ENODATA") {
        console.log(`No SRV records found for ${domain}.`);
      } else {
        console.error(`Error resolving SRV records for ${domain}:`, error);
      }
    }
  } catch (error) {
    console.error(`Error fetching DNS records for ${domain}:`, error);
  }
  return records;
}
