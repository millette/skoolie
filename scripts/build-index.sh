#!/usr/bin/sh

node scripts/build-search-index.mjs && tinysearch search-index-fr.json --optimize --mode wasm --path tada-fr && tinysearch search-index-en.json --optimize --mode wasm --path tada-en && cp -v tada-fr/tinysearch_engine_bg.wasm public/tinysearch_engine_fr.wasm && cp -v tada-en/tinysearch_engine_bg.wasm public/tinysearch_engine_en.wasm && rm -vfr tada-fr tada-en search-index-en.json search-index-fr.json

# node scripts/build-search-index.mjs && tinysearch search-index-fr.json --optimize --mode wasm --path tada-fr && tinysearch search-index-en.json --optimize --mode wasm --path tada-en && cp -v tada-fr/tinysearch_engine_bg.wasm public/tinysearch_engine_fr.wasm && cp -v tada-fr/tinysearch_engine.js src/components/ && cp -v tada-en/tinysearch_engine_bg.wasm public/tinysearch_engine_en.wasm && rm -vfr tada-fr tada-en search-index-en.json search-index-fr.json
