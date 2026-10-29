(() => {
  'use strict';

  const universities = [{"rank":1,"name":"清华大学","province":"北京","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":2,"name":"北京大学","province":"北京","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":3,"name":"浙江大学","province":"浙江","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":4,"name":"上海交通大学","province":"上海","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":5,"name":"复旦大学","province":"上海","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":6,"name":"南京大学","province":"江苏","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":7,"name":"中国科学技术大学","province":"安徽","type":"理工","score":null,"tags":["985","211","双一流"]},{"rank":8,"name":"武汉大学","province":"湖北","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":9,"name":"华中科技大学","province":"湖北","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":10,"name":"西安交通大学","province":"陕西","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":11,"name":"北京航空航天大学","province":"北京","type":"理工","score":null,"tags":["985","211","双一流"]},{"rank":12,"name":"哈尔滨工业大学","province":"黑龙江","type":"理工","score":null,"tags":["985","211","双一流"]},{"rank":13,"name":"中山大学","province":"广东","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":14,"name":"北京理工大学","province":"北京","type":"理工","score":null,"tags":["985","211","双一流"]},{"rank":14,"name":"北京协和医学院","province":"北京","type":"医药","score":null,"tags":["双一流"]},{"rank":15,"name":"东南大学","province":"江苏","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":16,"name":"四川大学","province":"四川","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":17,"name":"中国人民大学","province":"北京","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":18,"name":"同济大学","province":"上海","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":19,"name":"北京师范大学","province":"北京","type":"师范","score":null,"tags":["985","211","双一流"]},{"rank":20,"name":"天津大学","province":"天津","type":"理工","score":null,"tags":["985","211","双一流"]},{"rank":21,"name":"南开大学","province":"天津","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":22,"name":"山东大学","province":"山东","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":23,"name":"西北工业大学","province":"陕西","type":"理工","score":null,"tags":["985","211","双一流"]},{"rank":24,"name":"中国农业大学","province":"北京","type":"农业","score":null,"tags":["985","211","双一流"]},{"rank":25,"name":"厦门大学","province":"福建","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":26,"name":"吉林大学","province":"吉林","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":27,"name":"中南大学","province":"湖南","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":28,"name":"大连理工大学","province":"辽宁","type":"理工","score":null,"tags":["985","211","双一流"]},{"rank":29,"name":"华东师范大学","province":"上海","type":"师范","score":null,"tags":["985","211","双一流"]},{"rank":30,"name":"南方科技大学","province":"广东","type":"综合","score":null,"tags":["双一流"]},{"rank":31,"name":"湖南大学","province":"湖南","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":32,"name":"华南理工大学","province":"广东","type":"理工","score":null,"tags":["985","211","双一流"]},{"rank":33,"name":"电子科技大学","province":"四川","type":"理工","score":null,"tags":["985","211","双一流"]},{"rank":34,"name":"重庆大学","province":"重庆","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":35,"name":"北京科技大学","province":"北京","type":"理工","score":null,"tags":["211","双一流"]},{"rank":35,"name":"上海财经大学","province":"上海","type":"财经","score":null,"tags":["211","双一流"]},{"rank":36,"name":"南京理工大学","province":"江苏","type":"理工","score":null,"tags":["211","双一流"]},{"rank":37,"name":"南京航空航天大学","province":"江苏","type":"理工","score":null,"tags":["211","双一流"]},{"rank":38,"name":"东北大学","province":"辽宁","type":"理工","score":null,"tags":["985","211","双一流"]},{"rank":39,"name":"西安电子科技大学","province":"陕西","type":"理工","score":null,"tags":["211","双一流"]},{"rank":40,"name":"兰州大学","province":"甘肃","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":41,"name":"北京交通大学","province":"北京","type":"理工","score":null,"tags":["211","双一流"]},{"rank":42,"name":"华东理工大学","province":"上海","type":"理工","score":null,"tags":["211","双一流"]},{"rank":42,"name":"中央财经大学","province":"北京","type":"财经","score":null,"tags":["211","双一流"]},{"rank":43,"name":"哈尔滨工程大学","province":"黑龙江","type":"理工","score":null,"tags":["211","双一流"]},{"rank":44,"name":"郑州大学","province":"河南","type":"综合","score":null,"tags":["211","双一流"]},{"rank":45,"name":"华中农业大学","province":"湖北","type":"农业","score":null,"tags":["211","双一流"]},{"rank":46,"name":"苏州大学","province":"江苏","type":"综合","score":null,"tags":["211","双一流"]},{"rank":47,"name":"上海科技大学","province":"上海","type":"综合","score":null,"tags":["双一流"]},{"rank":48,"name":"东北师范大学","province":"吉林","type":"师范","score":null,"tags":["211","双一流"]},{"rank":49,"name":"西南交通大学","province":"四川","type":"理工","score":null,"tags":["211","双一流"]},{"rank":50,"name":"北京邮电大学","province":"北京","type":"理工","score":null,"tags":["211","双一流"]},{"rank":51,"name":"中国海洋大学","province":"山东","type":"综合","score":null,"tags":["985","211","双一流"]},{"rank":52,"name":"江南大学","province":"江苏","type":"综合","score":null,"tags":["211","双一流"]},{"rank":53,"name":"华中师范大学","province":"湖北","type":"师范","score":null,"tags":["211","双一流"]},{"rank":54,"name":"武汉理工大学","province":"湖北","type":"理工","score":null,"tags":["211","双一流"]},{"rank":55,"name":"南京农业大学","province":"江苏","type":"农业","score":null,"tags":["211","双一流"]},{"rank":56,"name":"中国地质大学（武汉）","province":"湖北","type":"理工","score":null,"tags":["211","双一流"]},{"rank":56,"name":"中国政法大学","province":"北京","type":"政法","score":null,"tags":["211","双一流"]},{"rank":57,"name":"北京化工大学","province":"北京","type":"理工","score":null,"tags":["211","双一流"]},{"rank":57,"name":"对外经济贸易大学","province":"北京","type":"财经","score":null,"tags":["211","双一流"]},{"rank":57,"name":"中南财经政法大学","province":"湖北","type":"财经","score":null,"tags":["211","双一流"]},{"rank":58,"name":"南京师范大学","province":"江苏","type":"师范","score":null,"tags":["211","双一流"]},{"rank":59,"name":"暨南大学","province":"广东","type":"综合","score":null,"tags":["211","双一流"]},{"rank":60,"name":"上海大学","province":"上海","type":"综合","score":null,"tags":["211","双一流"]},{"rank":60,"name":"天津医科大学","province":"天津","type":"医药","score":null,"tags":["211","双一流"]},{"rank":61,"name":"西南大学","province":"重庆","type":"综合","score":null,"tags":["211","双一流"]},{"rank":62,"name":"中国石油大学（北京）","province":"北京","type":"理工","score":null,"tags":["211","双一流"]},{"rank":63,"name":"河海大学","province":"江苏","type":"理工","score":null,"tags":["211","双一流"]},{"rank":63,"name":"陕西师范大学","province":"陕西","type":"师范","score":null,"tags":["211","双一流"]},{"rank":63,"name":"北京中医药大学","province":"北京","type":"中医药","score":null,"tags":["211","双一流"]},{"rank":65,"name":"北京工业大学","province":"北京","type":"理工","score":null,"tags":["211","双一流"]},{"rank":66,"name":"西南财经大学","province":"四川","type":"财经","score":null,"tags":["211","双一流"]},{"rank":67,"name":"中国矿业大学","province":"江苏","type":"理工","score":null,"tags":["211","双一流"]},{"rank":69,"name":"西北农林科技大学","province":"陕西","type":"农业","score":null,"tags":["985","211","双一流"]},{"rank":69,"name":"上海中医药大学","province":"上海","type":"中医药","score":null,"tags":["双一流"]},{"rank":70,"name":"西北大学","province":"陕西","type":"综合","score":null,"tags":["211","双一流"]},{"rank":71,"name":"云南大学","province":"云南","type":"综合","score":null,"tags":["211","双一流"]},{"rank":72,"name":"东华大学","province":"上海","type":"理工","score":null,"tags":["211","双一流"]},{"rank":73,"name":"中国石油大学（华东）","province":"山东","type":"理工","score":null,"tags":["211","双一流"]},{"rank":74,"name":"南昌大学","province":"江西","type":"综合","score":null,"tags":["211","双一流"]},{"rank":75,"name":"中国地质大学（北京）","province":"北京","type":"理工","score":null,"tags":["211","双一流"]},{"rank":76,"name":"中国矿业大学（北京）","province":"北京","type":"理工","score":null,"tags":["211","双一流"]},{"rank":77,"name":"福州大学","province":"福建","type":"理工","score":null,"tags":["211","双一流"]},{"rank":78,"name":"宁波大学","province":"浙江","type":"综合","score":null,"tags":["双一流"]},{"rank":79,"name":"华南师范大学","province":"广东","type":"师范","score":null,"tags":["211","双一流"]},{"rank":79,"name":"中央民族大学","province":"北京","type":"民族","score":null,"tags":["985","211","双一流"]},{"rank":79,"name":"广州医科大学","province":"广东","type":"医药","score":null,"tags":["双一流"]},{"rank":79,"name":"北京外国语大学","province":"北京","type":"语言","score":null,"tags":["211","双一流"]},{"rank":80,"name":"合肥工业大学","province":"安徽","type":"理工","score":null,"tags":["211","双一流"]},{"rank":81,"name":"上海外国语大学","province":"上海","type":"语言","score":null,"tags":["211","双一流"]},{"rank":82,"name":"南京邮电大学","province":"江苏","type":"理工","score":null,"tags":["双一流"]},{"rank":82,"name":"中国传媒大学","province":"北京","type":"语言","score":null,"tags":["211","双一流"]},{"rank":83,"name":"北京林业大学","province":"北京","type":"林业","score":null,"tags":["211","双一流"]},{"rank":84,"name":"华北电力大学","province":"北京","type":"理工","score":null,"tags":["211","双一流"]},{"rank":85,"name":"贵州大学","province":"贵州","type":"综合","score":null,"tags":["211","双一流"]},{"rank":86,"name":"广西大学","province":"广西","type":"综合","score":null,"tags":["211","双一流"]},{"rank":87,"name":"海南大学","province":"海南","type":"综合","score":null,"tags":["211","双一流"]},{"rank":88,"name":"中国药科大学","province":"江苏","type":"医药","score":null,"tags":["211","双一流"]},{"rank":89,"name":"长安大学","province":"陕西","type":"理工","score":null,"tags":["211","双一流"]},{"rank":92,"name":"湖南师范大学","province":"湖南","type":"师范","score":null,"tags":["211","双一流"]},{"rank":93,"name":"南京林业大学","province":"江苏","type":"林业","score":null,"tags":["双一流"]},{"rank":93,"name":"南京中医药大学","province":"江苏","type":"中医药","score":null,"tags":["双一流"]},{"rank":95,"name":"河南大学","province":"河南","type":"综合","score":null,"tags":["双一流"]},{"rank":98,"name":"南京信息工程大学","province":"江苏","type":"理工","score":null,"tags":["双一流"]},{"rank":98,"name":"广州中医药大学","province":"广东","type":"中医药","score":null,"tags":["双一流"]},{"rank":100,"name":"首都师范大学","province":"北京","type":"师范","score":null,"tags":["双一流"]},{"rank":101,"name":"安徽大学","province":"安徽","type":"综合","score":null,"tags":["211","双一流"]},{"rank":102,"name":"山西大学","province":"山西","type":"综合","score":null,"tags":["双一流"]},{"rank":103,"name":"华南农业大学","province":"广东","type":"农业","score":null,"tags":["双一流"]},{"rank":105,"name":"外交学院","province":"北京","type":"语言","score":null,"tags":["双一流"]},{"rank":107,"name":"河北工业大学","province":"河北","type":"理工","score":null,"tags":["211","双一流"]},{"rank":113,"name":"大连海事大学","province":"辽宁","type":"综合","score":null,"tags":["211","双一流"]},{"rank":114,"name":"内蒙古大学","province":"内蒙古","type":"综合","score":null,"tags":["211","双一流"]},{"rank":115,"name":"东北林业大学","province":"黑龙江","type":"林业","score":null,"tags":["211","双一流"]},{"rank":117,"name":"湘潭大学","province":"湖南","type":"综合","score":null,"tags":["双一流"]},{"rank":119,"name":"西南石油大学","province":"四川","type":"理工","score":null,"tags":["双一流"]},{"rank":120,"name":"东北农业大学","province":"黑龙江","type":"农业","score":null,"tags":["211","双一流"]},{"rank":120,"name":"天津中医药大学","province":"天津","type":"中医药","score":null,"tags":["双一流"]},{"rank":121,"name":"成都中医药大学","province":"四川","type":"中医药","score":null,"tags":["双一流"]},{"rank":125,"name":"辽宁大学","province":"辽宁","type":"综合","score":null,"tags":["211","双一流"]},{"rank":127,"name":"成都理工大学","province":"四川","type":"理工","score":null,"tags":["双一流"]},{"rank":131,"name":"新疆大学","province":"新疆","type":"综合","score":null,"tags":["211","双一流"]},{"rank":131,"name":"上海体育大学","province":"上海","type":"体育","score":null,"tags":["双一流"]},{"rank":133,"name":"天津工业大学","province":"天津","type":"理工","score":null,"tags":["双一流"]},{"rank":134,"name":"四川农业大学","province":"四川","type":"农业","score":null,"tags":["211","双一流"]},{"rank":135,"name":"石河子大学","province":"新疆","type":"综合","score":null,"tags":["211","双一流"]},{"rank":137,"name":"宁夏大学","province":"宁夏","type":"综合","score":null,"tags":["211","双一流"]},{"rank":139,"name":"中国人民公安大学","province":"北京","type":"政法","score":null,"tags":["双一流"]},{"rank":142,"name":"上海海洋大学","province":"上海","type":"农业","score":null,"tags":["双一流"]},{"rank":157,"name":"延边大学","province":"吉林","type":"综合","score":null,"tags":["211","双一流"]},{"rank":177,"name":"北京体育大学","province":"北京","type":"体育","score":null,"tags":["211","双一流"]},{"rank":201,"name":"西藏大学","province":"西藏","type":"综合","score":null,"tags":["211","双一流"]},{"rank":203,"name":"青海大学","province":"青海","type":"综合","score":null,"tags":["211","双一流"]},{"rank":null,"name":"国防科技大学","province":"湖南","type":"军事","score":null,"tags":["985","211","双一流"]},{"rank":null,"name":"海军军医大学","province":"上海","type":"军事/医药","score":null,"tags":["211","双一流"]},{"rank":null,"name":"空军军医大学","province":"陕西","type":"军事/医药","score":null,"tags":["211","双一流"]},{"rank":null,"name":"中国美术学院","province":"浙江","type":"艺术","score":null,"tags":["双一流"]},{"rank":null,"name":"中央美术学院","province":"北京","type":"艺术","score":null,"tags":["双一流"]},{"rank":null,"name":"中央戏剧学院","province":"北京","type":"艺术","score":null,"tags":["双一流"]},{"rank":null,"name":"中国音乐学院","province":"北京","type":"艺术","score":null,"tags":["双一流"]},{"rank":null,"name":"中国科学院大学","province":"北京","type":"综合","score":null,"tags":["双一流"]},{"rank":null,"name":"中央音乐学院","province":"北京","type":"艺术","score":null,"tags":["211","双一流"]}];

  const $ = (id) => document.getElementById(id);
  const tbody = $('tbody');
  const searchInput = $('search');
  const searchClear = $('search-clear');
  const searchSuggestions = $('search-suggestions');
  const resultCount = $('result-count');
  const searchStatus = $('search-status');
  const statTotal = $('stat-total');
  const stat985 = $('stat-985');
  const stat211 = $('stat-211');
  const statSyl = $('stat-syl');
  const tableCard = $('table-card');
  const mapCard = $('map-card');
  const mapContainer = $('map-container');
  const mapSearch = $('map-search');
  const mapClear = $('map-clear');
  const mapSuggestions = $('map-suggestions');
  const mapSummary = $('map-summary');
  const mapLoading = $('map-loading');
  const infoTitle = $('info-title');
  const infoSub = $('info-sub');
  const infoStats = $('info-stats');
  const infoSchools = $('info-schools');
  const infoActions = $('info-actions');

  const state = {
    filter: 'all',
    sort: { key: 'rank', dir: 'asc' },
    term: '',
    view: 'list',
    suggestionIndex: -1,
    mapTerm: '',
    mapSuggestionIndex: -1,
    mapSelected: null
  };

  const LOGO_DIR = 'logos/';
  const SEARCH_TEXT = new Map();
  universities.forEach(u => {
    SEARCH_TEXT.set(u, [u.name, u.province, u.type, ...u.tags].join(' ').toLowerCase());
  });

  const provinceNameMap = {
    '北京': '北京市', '天津': '天津市', '上海': '上海市', '重庆': '重庆市',
    '河北': '河北省', '山西': '山西省', '辽宁': '辽宁省', '吉林': '吉林省',
    '黑龙江': '黑龙江省', '江苏': '江苏省', '浙江': '浙江省', '安徽': '安徽省',
    '福建': '福建省', '江西': '江西省', '山东': '山东省', '河南': '河南省',
    '湖北': '湖北省', '湖南': '湖南省', '广东': '广东省', '海南': '海南省',
    '四川': '四川省', '贵州': '贵州省', '云南': '云南省', '陕西': '陕西省',
    '甘肃': '甘肃省', '青海': '青海省', '台湾': '台湾省', '内蒙古': '内蒙古自治区',
    '广西': '广西壮族自治区', '西藏': '西藏自治区', '宁夏': '宁夏回族自治区',
    '新疆': '新疆维吾尔自治区', '香港': '香港特别行政区', '澳门': '澳门特别行政区'
  };
  const shortByFull = {};
  Object.keys(provinceNameMap).forEach(k => { shortByFull[provinceNameMap[k]] = k; });

  const escRe = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = (s) => String(s || '').trim().toLowerCase();
  const termsOf = (s) => norm(s).split(/\s+/).filter(Boolean);

  function highlight(text, query = state.term) {
    const safe = esc(text);
    const terms = termsOf(query);
    if (!terms.length) return safe;
    let out = safe;
    for (const term of terms) {
      const needle = esc(term);
      if (!needle) continue;
      try {
        out = out.replace(new RegExp(escRe(needle), 'gi'), m => `<mark>${m}</mark>`);
      } catch (_) {}
    }
    return out;
  }

  const tagClass = (t) => t === '985' ? 'tag-985' : t === '211' ? 'tag-211' : 'tag-syl';
  const renderTags = (tags) => tags.length
    ? `<div class="tags">${tags.map(t => `<span class="tag ${tagClass(t)}">${highlight(t)}</span>`).join('')}</div>`
    : '<span style="color:var(--muted)">—</span>';

  function matchesFilter(u) {
    if (state.filter === '985') return u.tags.includes('985');
    if (state.filter === '211') return u.tags.includes('211') && !u.tags.includes('985');
    if (state.filter === '双一流') return u.tags.includes('双一流') && !u.tags.includes('985') && !u.tags.includes('211');
    return true;
  }

  function matchesQuery(u, query = state.term) {
    const terms = termsOf(query);
    if (!terms.length) return true;
    const text = SEARCH_TEXT.get(u);
    return terms.every(t => text.includes(t));
  }

  function searchScore(u, query = state.term) {
    const q = norm(query);
    if (!q) return 0;
    const name = u.name.toLowerCase();
    let base = 9;
    if (name === q) base = 0;
    else if (name.startsWith(q)) base = 1;
    else if (name.includes(q)) base = 2;
    else if (u.province.toLowerCase() === q) base = 3;
    else if (u.type.toLowerCase().includes(q)) base = 4;
    else if (u.tags.some(t => t.toLowerCase() === q)) base = 5;
    else if (SEARCH_TEXT.get(u).includes(q)) base = 6;
    return base * 10000 + (u.rank == null ? 9999 : u.rank) * 10 + Math.min(name.length, 9);
  }

  function rankCompare(a, b) {
    if (a.rank == null && b.rank == null) return 0;
    if (a.rank == null) return 1;
    if (b.rank == null) return -1;
    return a.rank - b.rank;
  }

  function sortData(data) {
    const out = data.slice();
    if (state.term.trim()) {
      out.sort((a, b) => searchScore(a) - searchScore(b) || rankCompare(a, b) || a.name.localeCompare(b.name, 'zh-Hans-CN'));
      return out;
    }
    const { key, dir } = state.sort;
    out.sort((a, b) => {
      if (key === 'rank') {
        if (a.rank == null && b.rank == null) return 0;
        if (a.rank == null) return 1;
        if (b.rank == null) return -1;
        return dir === 'asc' ? a.rank - b.rank : b.rank - a.rank;
      }
      const av = String(a[key] ?? '');
      const bv = String(b[key] ?? '');
      const c = av.localeCompare(bv, 'zh-Hans-CN');
      return dir === 'asc' ? c : -c;
    });
    return out;
  }

  function getFiltered() {
    return universities.filter(u => matchesFilter(u) && matchesQuery(u));
  }

  function render() {
    const data = sortData(getFiltered());
    const q = state.term.trim();
    tbody.innerHTML = data.length ? data.map(u => {
      const logoPath = LOGO_DIR + encodeURIComponent(u.name) + '.webp';
      return `<tr data-name="${esc(u.name)}">
        <td class="rank ${u.rank != null && u.rank <= 3 ? 'top3' : ''}">${u.rank != null ? u.rank : '—'}</td>
        <td class="name"><img src="${logoPath}" class="school-icon" width="24" height="24" alt="" loading="lazy" decoding="async" onerror="this.style.visibility='hidden'">${highlight(u.name)}</td>
        <td class="province">${highlight(u.province)}</td>
        <td class="type">${highlight(u.type)}</td>
        <td class="tags">${renderTags(u.tags)}</td>
      </tr>`;
    }).join('') : '<tr class="empty-row"><td colspan="5">没有匹配的高校，试试其他关键词。</td></tr>';

    statTotal.textContent = data.length;
    stat985.textContent = data.filter(u => u.tags.includes('985')).length;
    stat211.textContent = data.filter(u => u.tags.includes('211')).length;
    statSyl.textContent = data.filter(u => u.tags.includes('双一流')).length;
    resultCount.textContent = data.length;
    searchStatus.textContent = q ? '按相关度排序' : '';
    searchClear.hidden = !state.term;

    document.querySelectorAll('th[data-sort]').forEach(th => {
      th.classList.remove('sort-asc', 'sort-desc');
      th.removeAttribute('aria-sort');
      if (!q && th.dataset.sort === state.sort.key) {
        th.classList.add(state.sort.dir === 'asc' ? 'sort-asc' : 'sort-desc');
        th.setAttribute('aria-sort', state.sort.dir === 'asc' ? 'ascending' : 'descending');
      }
    });
  }

  function suggestionList(query) {
    const q = query.trim();
    if (!q) return [];
    return universities
      .filter(u => matchesFilter(u) && matchesQuery(u, q))
      .sort((a, b) => searchScore(a, q) - searchScore(b, q) || rankCompare(a, b))
      .slice(0, 7);
  }

  function renderSuggestions() {
    const q = state.term.trim();
    const list = suggestionList(q);
    searchInput.setAttribute('aria-expanded', list.length ? 'true' : 'false');
    if (!q) {
      searchSuggestions.hidden = true;
      searchSuggestions.innerHTML = '';
      state.suggestionIndex = -1;
      return;
    }
    if (!list.length) {
      searchSuggestions.hidden = false;
      searchSuggestions.innerHTML = '<div class="suggestion-empty">没有匹配的高校</div>';
      state.suggestionIndex = -1;
      return;
    }
    searchSuggestions.hidden = false;
    searchSuggestions.innerHTML = list.map((u, i) => `<button type="button" class="suggestion${i === state.suggestionIndex ? ' is-active' : ''}" role="option" data-name="${esc(u.name)}" data-index="${i}">
      <span class="suggestion-rank">${u.rank != null ? u.rank : '—'}</span>
      <span class="suggestion-main"><span class="suggestion-name">${highlight(u.name)}</span><span class="suggestion-meta">${esc(u.province)} · ${esc(u.type)} · ${esc(u.tags.join(' / '))}</span></span>
    </button>`).join('');
  }

  function hideSuggestions() {
    searchSuggestions.hidden = true;
    searchInput.setAttribute('aria-expanded', 'false');
    state.suggestionIndex = -1;
  }

  function selectSchool(name) {
    state.term = name;
    searchInput.value = name;
    hideSuggestions();
    render();
    searchInput.focus();
  }

  function clearSearch() {
    state.term = '';
    searchInput.value = '';
    hideSuggestions();
    render();
    searchInput.focus();
  }

  let searchTimer = null;
  searchInput.addEventListener('input', e => {
    state.term = e.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      render();
      renderSuggestions();
    }, 70);
  });
  searchInput.addEventListener('focus', () => {
    if (state.term.trim()) renderSuggestions();
  });
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      if (state.term) clearSearch();
      else hideSuggestions();
      return;
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (searchSuggestions.hidden) renderSuggestions();
      const items = searchSuggestions.querySelectorAll('.suggestion');
      if (!items.length) return;
      e.preventDefault();
      const delta = e.key === 'ArrowDown' ? 1 : -1;
      state.suggestionIndex = (state.suggestionIndex + delta + items.length) % items.length;
      items.forEach((el, i) => el.classList.toggle('is-active', i === state.suggestionIndex));
      items[state.suggestionIndex].scrollIntoView({ block: 'nearest' });
      return;
    }
    if (e.key === 'Enter' && state.suggestionIndex >= 0) {
      const item = searchSuggestions.querySelectorAll('.suggestion')[state.suggestionIndex];
      if (item) {
        e.preventDefault();
        selectSchool(item.dataset.name);
      }
    }
  });
  searchInput.addEventListener('search', () => {
    if (!searchInput.value) clearSearch();
  });
  searchClear.addEventListener('click', clearSearch);
  searchSuggestions.addEventListener('click', e => {
    const item = e.target.closest('.suggestion');
    if (item) selectSchool(item.dataset.name);
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) hideSuggestions();
    if (!e.target.closest('.map-search-wrap')) hideMapSuggestions();
  });
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.filter = tab.dataset.filter;
      render();
    });
  });

  document.querySelectorAll('th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      if (state.sort.key === key) state.sort.dir = state.sort.dir === 'asc' ? 'desc' : 'asc';
      else state.sort = { key, dir: key === 'rank' ? 'asc' : 'desc' };
      render();
    });
  });

  // ---- map ----
  let echartsPromise = null;
  const map = { chart: null, loading: false, stats: {}, selected: null };

  function loadECharts() {
    if (window.echarts) return Promise.resolve(window.echarts);
    if (echartsPromise) return echartsPromise;
    echartsPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'echarts.min.js';
      s.async = true;
      s.onload = () => window.echarts ? resolve(window.echarts) : reject(new Error('ECharts 未加载'));
      s.onerror = () => reject(new Error('ECharts 加载失败'));
      document.head.appendChild(s);
    });
    return echartsPromise;
  }

  function aggregate(list) {
    const stats = {};
    list.forEach(u => {
      const full = provinceNameMap[u.province] || u.province;
      if (!stats[full]) stats[full] = { total: 0, '985': 0, '211': 0, '双一流': 0, schools: [] };
      stats[full].total++;
      if (u.tags.includes('985')) stats[full]['985']++;
      if (u.tags.includes('211')) stats[full]['211']++;
      if (u.tags.includes('双一流')) stats[full]['双一流']++;
      stats[full].schools.push(u);
    });
    return stats;
  }

  function mapList() {
    return universities.filter(u => matchesFilter(u) && matchesQuery(u, state.mapTerm));
  }

  function mapData(stats) {
    return Object.keys(stats).map(name => ({ name, value: stats[name].total }));
  }

  function schoolColor(u) {
    if (u.tags.includes('985')) return '#ef4444';
    if (u.tags.includes('211')) return '#f59e0b';
    if (u.tags.includes('双一流')) return '#10b981';
    return '#94a3b8';
  }

  function infoStatHTML(stat) {
    return `<div class="info-stat"><div class="num">${stat['985']}</div><div class="label">985</div></div>
      <div class="info-stat"><div class="num">${stat['211']}</div><div class="label">211</div></div>
      <div class="info-stat"><div class="num">${stat['双一流']}</div><div class="label">双一流</div></div>`;
  }

  function chipsHTML(schools) {
    return schools.map(u => `<button type="button" class="school-chip" data-school="${esc(u.name)}" title="在列表中查看 ${esc(u.name)}"><span class="dot" style="background:${schoolColor(u)}"></span>${esc(u.name)}</button>`).join('');
  }

  function renderMapInfo() {
    const list = mapList();
    if (!list.length) {
      infoTitle.textContent = '没有匹配结果';
      infoSub.textContent = state.mapTerm ? `没有找到与“${state.mapTerm.trim()}”相关的高校。` : '点击地图上的省份，查看该省高校。';
      infoStats.innerHTML = '';
      infoSchools.innerHTML = '';
      infoActions.hidden = true;
      return;
    }

    if (map.selected) {
      const short = shortByFull[map.selected] || map.selected;
      const schools = list.filter(u => (provinceNameMap[u.province] || u.province) === map.selected);
      const stat = aggregate(schools)[map.selected] || { '985': 0, '211': 0, '双一流': 0 };
      infoTitle.textContent = `${short} · 共 ${schools.length} 所高校`;
      infoSub.textContent = state.mapTerm ? `当前搜索“${state.mapTerm.trim()}”` : '点击学校可在列表中查看';
      infoStats.innerHTML = infoStatHTML(stat);
      infoSchools.innerHTML = chipsHTML(schools);
      infoActions.hidden = false;
      infoActions.innerHTML = `<button type="button" data-map-action="list-province">在列表中查看该省 →</button>`;
      return;
    }

    if (state.mapTerm.trim()) {
      const stats = aggregate(list);
      const grouped = Object.keys(stats).sort((a, b) => stats[b].total - stats[a].total);
      infoTitle.textContent = `搜索“${state.mapTerm.trim()}”`;
      infoSub.textContent = `共 ${list.length} 所高校，分布在 ${grouped.length} 个省份`;
      infoStats.innerHTML = infoStatHTML({
        '985': list.filter(u => u.tags.includes('985')).length,
        '211': list.filter(u => u.tags.includes('211')).length,
        '双一流': list.filter(u => u.tags.includes('双一流')).length
      });
      infoSchools.innerHTML = grouped.map(full => {
        const short = shortByFull[full] || full;
        const schools = stats[full].schools;
        return `<div class="province-group"><div class="province-label">${short} · ${schools.length} 所</div><div class="school-list">${chipsHTML(schools)}</div></div>`;
      }).join('');
      infoActions.hidden = true;
      return;
    }

    const stats = aggregate(universities);
    const top = Object.keys(stats).sort((a, b) => stats[b].total - stats[a].total).slice(0, 8);
    const max = Math.max(1, ...top.map(full => stats[full].total));
    infoTitle.textContent = '全国分布';
    infoSub.textContent = `共 ${universities.length} 所高校，覆盖 ${Object.keys(stats).length} 个省份`;
    infoStats.innerHTML = infoStatHTML({
      '985': universities.filter(u => u.tags.includes('985')).length,
      '211': universities.filter(u => u.tags.includes('211')).length,
      '双一流': universities.filter(u => u.tags.includes('双一流')).length
    });
    infoSchools.innerHTML = `<div class="province-list">${top.map(full => {
      const short = shortByFull[full] || full;
      return `<button type="button" class="province-row" data-province="${esc(full)}"><span class="p-name">${esc(short)}</span><span class="p-count">${stats[full].total} 所</span><span class="p-bar"><i style="width:${Math.round(stats[full].total / max * 100)}%"></i></span></button>`;
    }).join('')}</div>`;
    infoActions.hidden = true;
  }

  function updateMap() {
    const list = mapList();
    map.stats = aggregate(list);
    const data = mapData(map.stats);
    const max = Math.max(1, ...data.map(d => d.value));
    if (state.mapTerm.trim()) {
      mapSummary.textContent = list.length
        ? `找到 ${list.length} 所高校，分布在 ${Object.keys(map.stats).length} 个省份`
        : '没有匹配的高校';
    } else {
      mapSummary.textContent = '点击省份查看高校，或搜索学校快速定位';
    }
    if (map.chart) {
      map.chart.setOption({
        visualMap: { max },
        series: [{ data }]
      });
      map.chart.dispatchAction({ type: 'mapUnSelect' });
      if (map.selected) map.chart.dispatchAction({ type: 'mapSelect', name: map.selected });
    }
    renderMapInfo();
  }

  function initMap() {
    if (map.chart || map.loading) return;
    map.loading = true;
    mapLoading.hidden = false;
    mapLoading.innerHTML = '<div><div class="spinner"></div>地图加载中…</div>';
    Promise.all([
      loadECharts(),
      fetch('china-map.json').then(r => {
        if (!r.ok) throw new Error('地图数据加载失败');
        return r.json();
      })
    ]).then(([echarts, geo]) => {
      echarts.registerMap('china', geo);
      map.chart = echarts.init(mapContainer, null, { renderer: 'canvas' });
      const labelSize = mapContainer.clientWidth < 500 ? 8 : mapContainer.clientWidth < 820 ? 9 : 10;
      map.chart.setOption({
        aria: { enabled: true },
        tooltip: {
          trigger: 'item',
          borderWidth: 0,
          backgroundColor: 'rgba(15, 23, 42, .93)',
          textStyle: { color: '#fff', fontSize: 12 },
          formatter: (p) => {
            if (!p.name) return '';
            const s = map.stats[p.name];
            if (!s) return `<b>${p.name}</b><br>暂无高校`;
            return `<b>${p.name}</b><br>高校 ${s.total} 所<br>985 ${s['985']} · 211 ${s['211']} · 双一流 ${s['双一流']}`;
          }
        },
        visualMap: {
          min: 0,
          max: Math.max(1, ...mapData(map.stats).map(d => d.value)),
          left: 12,
          bottom: 12,
          text: ['多', '少'],
          inRange: { color: ['#dbeafe', '#60a5fa', '#1e40af'] },
          calculable: false,
          itemWidth: 9,
          itemHeight: 68,
          textStyle: { fontSize: 10, color: '#64748b' }
        },
        series: [{
          name: '高校数量',
          type: 'map',
          map: 'china',
          roam: true,
          scaleLimit: { min: 0.85, max: 4 },
          selectedMode: 'single',
          layoutCenter: ['50%', '50%'],
          layoutSize: '96%',
          label: { show: true, fontSize: labelSize, color: '#334155' },
          labelLayout: { hideOverlap: true },
          itemStyle: { areaColor: '#f1f5f9', borderColor: '#ffffff', borderWidth: 1 },
          emphasis: {
            label: { show: true, fontWeight: 'bold', color: '#0f172a' },
            itemStyle: { areaColor: '#fbbf24' }
          },
          select: {
            label: { show: true, fontWeight: 'bold', color: '#0f172a' },
            itemStyle: { areaColor: '#f59e0b' }
          },
          data: mapData(map.stats)
        }]
      });
      map.chart.on('click', p => {
        if (p.componentType !== 'series' || !p.name) return;
        map.selected = p.name;
        map.chart.dispatchAction({ type: 'mapUnSelect' });
        map.chart.dispatchAction({ type: 'mapSelect', name: p.name });
        renderMapInfo();
      });
      mapLoading.hidden = true;
      map.loading = false;
      updateMap();
    }).catch(err => {
      console.error(err);
      mapLoading.innerHTML = '<div class="map-error">地图加载失败，请刷新页面重试。</div>';
      map.loading = false;
    });
  }

  function updateMapSelection() {
    if (!map.chart) return;
    map.chart.dispatchAction({ type: 'mapUnSelect' });
    if (map.selected) map.chart.dispatchAction({ type: 'mapSelect', name: map.selected });
  }

  function renderMapSuggestions() {
    const q = state.mapTerm.trim();
    const list = suggestionList(q);
    mapSearch.setAttribute('aria-expanded', list.length ? 'true' : 'false');
    if (!q) {
      hideMapSuggestions();
      return;
    }
    if (!list.length) {
      mapSuggestions.hidden = false;
      mapSuggestions.innerHTML = '<div class="suggestion-empty">没有匹配的高校</div>';
      state.mapSuggestionIndex = -1;
      return;
    }
    mapSuggestions.hidden = false;
    mapSuggestions.innerHTML = list.map((u, i) => `<button type="button" class="suggestion${i === state.mapSuggestionIndex ? ' is-active' : ''}" role="option" data-name="${esc(u.name)}" data-index="${i}">
      <span class="suggestion-rank">${u.rank != null ? u.rank : '—'}</span>
      <span class="suggestion-main"><span class="suggestion-name">${highlight(u.name, q)}</span><span class="suggestion-meta">${esc(u.province)} · ${esc(u.type)}</span></span>
    </button>`).join('');
  }

  function hideMapSuggestions() {
    mapSuggestions.hidden = true;
    mapSearch.setAttribute('aria-expanded', 'false');
    state.mapSuggestionIndex = -1;
  }

  function selectMapSchool(name) {
    state.mapTerm = name;
    mapSearch.value = name;
    mapClear.hidden = false;
    hideMapSuggestions();
    const school = universities.find(u => u.name === name);
    map.selected = school ? (provinceNameMap[school.province] || school.province) : null;
    updateMap();
    updateMapSelection();
  }

  function resetMap() {
    state.mapTerm = '';
    state.mapSelected = null;
    map.selected = null;
    mapSearch.value = '';
    mapClear.hidden = true;
    hideMapSuggestions();
    if (map.chart) {
      map.chart.dispatchAction({ type: 'mapUnSelect' });
      map.chart.dispatchAction({ type: 'hideTip' });
    }
    updateMap();
    updateMapSelection();
  }

  let mapTimer = null;
  mapSearch.addEventListener('input', e => {
    state.mapTerm = e.target.value;
    mapClear.hidden = !state.mapTerm;
    map.selected = null;
    clearTimeout(mapTimer);
    mapTimer = setTimeout(() => {
      if (state.view === 'map') updateMap();
      renderMapSuggestions();
    }, 90);
  });
  mapSearch.addEventListener('focus', () => {
    if (state.mapTerm.trim()) renderMapSuggestions();
  });
  mapSearch.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      if (state.mapTerm) resetMap();
      else hideMapSuggestions();
      return;
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (mapSuggestions.hidden) renderMapSuggestions();
      const items = mapSuggestions.querySelectorAll('.suggestion');
      if (!items.length) return;
      e.preventDefault();
      const delta = e.key === 'ArrowDown' ? 1 : -1;
      state.mapSuggestionIndex = (state.mapSuggestionIndex + delta + items.length) % items.length;
      items.forEach((el, i) => el.classList.toggle('is-active', i === state.mapSuggestionIndex));
      items[state.mapSuggestionIndex].scrollIntoView({ block: 'nearest' });
      return;
    }
    if (e.key === 'Enter' && state.mapSuggestionIndex >= 0) {
      const item = mapSuggestions.querySelectorAll('.suggestion')[state.mapSuggestionIndex];
      if (item) {
        e.preventDefault();
        selectMapSchool(item.dataset.name);
      }
    }
  });
  mapClear.addEventListener('click', resetMap);
  mapSuggestions.addEventListener('click', e => {
    const item = e.target.closest('.suggestion');
    if (item) selectMapSchool(item.dataset.name);
  });

  infoSchools.addEventListener('click', e => {
    const provinceRow = e.target.closest('.province-row');
    if (provinceRow) {
      map.selected = provinceRow.dataset.province;
      updateMapSelection();
      renderMapInfo();
      return;
    }
    const chip = e.target.closest('.school-chip');
    if (!chip) return;
    state.term = chip.dataset.school;
    searchInput.value = state.term;
    hideSuggestions();
    switchView('list');
    render();
    searchInput.focus();
  });

  infoActions.addEventListener('click', e => {
    const btn = e.target.closest('[data-map-action="list-province"]');
    if (!btn || !map.selected) return;
    const short = shortByFull[map.selected] || map.selected;
    state.term = short;
    searchInput.value = short;
    hideSuggestions();
    switchView('list');
    render();
    searchInput.focus();
  });

  $('map-reset').addEventListener('click', resetMap);

  function switchView(view) {
    state.view = view;
    document.querySelectorAll('.view-tab[data-view]').forEach(t => {
      const active = t.dataset.view === view;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    if (view === 'map') {
      tableCard.style.display = 'none';
      mapCard.style.display = 'block';
      initMap();
      if (map.chart) setTimeout(() => map.chart.resize(), 50);
    } else {
      tableCard.style.display = 'block';
      mapCard.style.display = 'none';
      hideMapSuggestions();
    }
  }

  document.querySelectorAll('.view-tab[data-view]').forEach(tab => {
    tab.addEventListener('click', () => switchView(tab.dataset.view));
  });

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    if (!map.chart) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      map.chart.resize();
      const labelSize = mapContainer.clientWidth < 500 ? 8 : mapContainer.clientWidth < 820 ? 9 : 10;
      map.chart.setOption({ series: [{ label: { fontSize: labelSize }, labelLayout: { hideOverlap: true } }] });
    }, 120);
  });

  render();
})();
