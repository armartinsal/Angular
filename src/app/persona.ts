
export class Persona {
	private nombre: String;
	private apellidos: String;
	private edad: Number;
	private DNI: String;
	private cumpleanos: Date;
	private colorFavorito: String;
	private sexo: String;

	constructor(
		nombre: String,
		apellidos: String,
		edad: Number,
		DNI: String,
		cumpleanos: Date,
		colorFavorito: String,
		sexo: String,
	) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
		this.DNI = DNI;
		this.cumpleanos = cumpleanos;
		this.colorFavorito = colorFavorito;
		this.sexo = sexo;
	}

	public getNombre() {
		return this.nombre;
	}
	public setNombre(nombre: String) {
		this.nombre = nombre;
	}
	public getApellidos() {
		return this.apellidos;
	}
	public setApellidos(apellidos: String) {
		this.apellidos = apellidos;
	}
	public getEdad() {
		return this.edad;
	}
	public setEdad(edad: Number) {
		this.edad = edad;
	}
	public getDNI() {
		return this.DNI;
	}
	public setDNI(DNI: String) {
		this.DNI = DNI;
	}
	public getCumpleanos() {
		return this.cumpleanos;
	}
	public setCumpleanos(cumpleanos: Date) {
		this.cumpleanos = cumpleanos;
	}
	public getColorFavorito() {
		return this.colorFavorito;
	}
	public setColorFavorito(colorFavorito: String) {
		this.colorFavorito = colorFavorito;
	}
	public getSexo() {
		return this.sexo;
	}
	public setSexo(sexo: String) {
		this.sexo = sexo;
	}
	}
