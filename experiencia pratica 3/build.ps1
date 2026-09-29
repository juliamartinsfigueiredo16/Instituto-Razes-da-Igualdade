# Gera uma versao estatica e reduzida para publicacao.
$raiz = Split-Path -Parent $MyInvocation.MyCommand.Path
$origemHtml = Join-Path $raiz "html\\index.html"
$destino = Join-Path $raiz "dist"
$destinoCss = Join-Path $destino "css"
$destinoJs = Join-Path $destino "js"
$destinoImagens = Join-Path $destino "imagens"

New-Item -ItemType Directory -Force -Path $destinoCss, $destinoJs, $destinoImagens | Out-Null

function Converter-CssMinificado([string] $conteudo) {
  $resultado = $conteudo -replace '(?s)/\*.*?\*/', ''
  $resultado = $resultado -replace '\s+', ' '
  $resultado = $resultado -replace '\s*([{}:;,])\s*', '$1'
  return $resultado.Trim()
}

function Converter-JsMinificado([string] $conteudo) {
  $linhas = $conteudo -split "`r?`n" |
    Where-Object { $_.Trim() -notmatch '^//|^$' } |
    ForEach-Object { $_.Trim() }
  return ($linhas -join ' ')
}

$html = Get-Content -Raw $origemHtml
$html = $html -replace '(?s)<!--.*?-->', ''
$html = $html -replace '>\s+<', '><'
$html = $html -replace '\.\./css/style\.css', 'css/style.min.css'
$html = $html -replace 'src="\.\./js/([^"]+)\.js"', 'src="js/$1.min.js"'
[System.IO.File]::WriteAllText((Join-Path $destino "index.html"), $html.Trim(), [System.Text.UTF8Encoding]::new($false))

$css = Get-Content -Raw (Join-Path $raiz "css\\style.css")
[System.IO.File]::WriteAllText((Join-Path $destinoCss "style.min.css"), (Converter-CssMinificado $css), [System.Text.UTF8Encoding]::new($false))

Get-ChildItem (Join-Path $raiz "js") -Filter "*.js" | ForEach-Object {
  $jsMinificado = Converter-JsMinificado (Get-Content -Raw $_.FullName)
  $jsMinificado = $jsMinificado -replace '\.\./imagens/', 'imagens/'
  $nomeDestino = "$($_.BaseName).min.js"
  [System.IO.File]::WriteAllText((Join-Path $destinoJs $nomeDestino), $jsMinificado, [System.Text.UTF8Encoding]::new($false))
}

Copy-Item -Path (Join-Path $raiz "imagens\\*") -Destination $destinoImagens -Force

Write-Host "Build concluida em: $destino"
