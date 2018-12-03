---
# create lunr store 
---
{%- assign items = site.data[site.metadata] -%}
var store = [ 
    {% for item in items %} 
    { 
        "indexId": {{ item.object-id | jsonify }},
        "title": {{ item.title | jsonify }},
        "authors": {{ item.authors | jsonify }},
        "subjects": {{ item.concepts | split: ";" | jsonify }},
        "date": {{ item.date | jsonify }},
        "abstract": {{ item.abstract | normalize_whitespace | jsonify }},
        "place": {{ item.places | jsonify }}
    }{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
];
