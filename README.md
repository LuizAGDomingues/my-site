useEffect(() => {
    const elemento = document.getElementById("certifications");
    console.log(elemento?.getBoundingClientRect());
    const propriedades = elemento?.getBoundingClientRect();
    const altura = propriedades?.height;
    const largura = propriedades?.width;
    console.log(altura);
  }, [])

  448px